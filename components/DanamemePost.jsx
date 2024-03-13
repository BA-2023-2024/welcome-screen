"use client";

import { useEffect, useState } from "react";
import supabase from "./Supabase";

export default function DanamemePost() {
  const [post, setPost] = useState();

  useEffect(() => {
    fetchPost();
  }, []);

  async function fetchPost() {
    const { data, error } = await supabase
      .from("post")
      .select("*, profile(*)")
      .order("createdat", { ascending: false })
      .limit(1);

    if (error) {
      console.error(error);
      return;
    }

    console.log(data);

    setPost(data[0]);
  }

  function calcTimeDifference(date) {
    const targetDateTime = new Date(date);
    const currentDateTime = new Date();

    const timeDifference = currentDateTime - targetDateTime;

    const secondsDifference = Math.floor(timeDifference / 1000);

    if (secondsDifference < 60) {
      return `vor ${secondsDifference} Sekunde${
        secondsDifference !== 1 ? "n" : ""
      }`;
    } else if (secondsDifference < 3600) {
      const minutes = Math.floor(secondsDifference / 60);
      return `vor ${minutes} Minute${minutes !== 1 ? "n" : ""}`;
    } else if (secondsDifference < 86400) {
      const hours = Math.floor(secondsDifference / 3600);
      return `vor ${hours} Stunde${hours !== 1 ? "n" : ""}`;
    } else if (secondsDifference < 604800) {
      const days = Math.floor(secondsDifference / 86400);
      return `vor ${days} Tag${days !== 1 ? "en" : ""}`;
    } else if (secondsDifference < 2419200) {
      const weeks = Math.floor(secondsDifference / 604800);
      return `vor ${weeks} Woche${weeks !== 1 ? "n" : ""}`;
    } else if (secondsDifference < 29030400) {
      const months = Math.floor(secondsDifference / 2419200);
      return `vor ${months} Monat${months !== 1 ? "en" : ""}`;
    }
  }

  function renderContent(text) {
    const linkRegex = /(https?:\/\/[^\s]+)/g;
    const mentionRegex = /@([^\s]+)/g;

    const textWithLinks = text.replace(
      linkRegex,
      '<a href="$1" class="underline" target="_blank">$1</a>'
    );
    const textWithMentions = textWithLinks.replace(
      mentionRegex,
      '<a href="/p/$1" class="font-bold" target="_blank">@$1</a>'
    );

    const finalHTML = `<p class="text text-base whitespace-pre-line">${textWithMentions}</p>`;

    // Use dangerouslySetInnerHTML to render HTML content in React (use with caution)
    return { __html: finalHTML };
  }

  supabase
    .channel("screen-post")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "post" },
      fetchPost
    )
    .subscribe();

  return (
    post && (
      <div className="card max-h-[765px]">
        <div className="flex flex-row justify-start items-center w-full">
          <h1 className="title pt-1.5 mx-auto">Neuster DANAMEME Post</h1>
        </div>
        <hr className="divider" />
        <div className="w-full flex flex-col justify-center items-center text-center">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex items-center">
              <img
                src={post.profile.profileimage}
                className="rounded-full border-[3px] border-[#9E575D] h-14 w-14 object-cover"
              />
              <h1 className="text-text font-bold text-xl font-poppins ms-2 sm:ms-4">
                {post.profile.username}
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row w-auto justify-end items-center space-x-3">
              <div className="flex w-full items-center">
                <p className="text-muted w-full text text-xs sm:text-sm">
                  {calcTimeDifference(post.createdat)}
                </p>
              </div>
            </div>
          </div>
          {(post.title || post.content) && (
            <div className="w-full mt-3">
              <h1 className="title text-2xl font-bold">{post.title}</h1>
              {post.content ? (
                <div
                  dangerouslySetInnerHTML={renderContent(post.content)}
                ></div>
              ) : (
                <></>
              )}
            </div>
          )}
          {post.asset && (
            <div className="w-full mt-3">
              <img
                className="w-full rounded-xl"
                src={post.asset}
                alt={post.title ? post.title : "Post"}
              />
            </div>
          )}
        </div>
      </div>
    )
  );
}
