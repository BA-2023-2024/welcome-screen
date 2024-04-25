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

export default function Home() {
  const [animation, setAnimation] = useState(null);

  return (
    <>
      <AnimationContext animation={animation} setAnimation={setAnimation} />
      {animation != null && animation}
      <main id="page">
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
            <Time />
            <Etagenuebersicht />
            <Empfang />
          </div>
          <div>
            <PersonSwitcher />
            <AirTemperature />
            <AareTemperature />
          </div>
          <div>
            <Birthdays />
            <Menuplan />
          </div>
        </div>
      </main>
    </>
  );
}
