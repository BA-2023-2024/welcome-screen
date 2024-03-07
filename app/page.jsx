"use client";

import AnimationContext from "@/components/animation/AnimationContext";
import { useEffect, useState } from "react";

export default function Home() {
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    console.log(animation);
  }, [animation]);

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
          </div>
        </main>
      )}
    </>
  );
}
