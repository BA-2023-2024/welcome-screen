"use client";

import DateBirthday from "@/components/DateBirthday";
import Post from "@/components/Post";
import Time from "@/components/Time";
import AnimationContext from "@/components/animation/AnimationContext";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [animation, setAnimation] = useState(null);

  return (
    <>
      <AnimationContext animation={animation} setAnimation={setAnimation} />
      {animation != null ? (
        animation
      ) : (
        <main id="page">
          <div>
            <h1 className="text-[2.2rem] font-bold text-primary">
              Willkommen im ICT-Campus
            </h1>
            <DateBirthday />
            <Post />
          </div>
          <div>
            <Time />
          </div>
        </main>
      )}
    </>
  );
}
