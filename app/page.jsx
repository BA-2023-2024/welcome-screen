"use client";

import AareTemperature from "@/components/AareTemperature";
import AirTemperature from "@/components/AirTemperature";
import DanamemePost from "@/components/DanamemePost";
import DateBirthday from "@/components/DateBirthday";
import JoinDanameme from "@/components/JoinDanameme";
import PersonSwitcher from "@/components/PersonSwitcher";
import Post from "@/components/Post";
import Time from "@/components/Time";
import AnimationContext from "@/components/animation/AnimationContext";
import { useState } from "react";

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
            <PersonSwitcher />
            <AirTemperature />
            <AareTemperature />
          </div>
          <div>
            <DanamemePost />
            <JoinDanameme />
          </div>
        </main>
      )}
    </>
  );
}
