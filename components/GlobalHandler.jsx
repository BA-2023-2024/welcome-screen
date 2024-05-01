"use client";

import AareTemperature from "@/components/AareTemperature";
import AirTemperature from "@/components/AirTemperature";
import PersonSwitcher from "@/components/PersonSwitcher";
import Time from "@/components/Time";
import AnimationContext from "@/components/animation/AnimationContext";
import { useState } from "react";
import Empfang from "@/components/Empfang";
import Birthdays from "@/components/Birthdays";
import Menuplan from "@/components/Menuplan";
import Etagenuebersicht from "@/components/Etagenuebersicht";
import LinesGithub from "./LinesGithub";

export default function GlobalHandler({ data }) {
  const [animation, setAnimation] = useState(null);

  return (
    <>
      <AnimationContext animation={animation} setAnimation={setAnimation} />
      {animation != null && animation}
      <main id="page">
        <div id="background">
          <div
            className={
              "z-50 transition-all duration-500 " +
              (animation != null ? "opacity-0" : "opacity-100")
            }
          >
            <div>
              <h1 className="text-[2.2rem] font-bold text-primary">
                Willkommen im ICT-Campus
              </h1>
              <Etagenuebersicht />
              <Empfang />
            </div>
            <div>
              <PersonSwitcher data={data} />
              <div className="flex flex-col">
                <Time />
                <LinesGithub />
                <div className="flex flex-row w-full justify-between gap-5">
                  <AirTemperature />
                  <AareTemperature />
                </div>
              </div>
            </div>
            <div>
              <Birthdays data={data} />
              <Menuplan />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
