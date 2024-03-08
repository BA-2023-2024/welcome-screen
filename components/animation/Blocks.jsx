import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Blocks({ setAnimation }) {
  gsap.registerPlugin(useGSAP);

  const container = useRef();
  const box = useRef();
  const box2 = useRef();

  useGSAP(
    () => {
      gsap.to(box.current, {
        x: 576,
        rotation: "-=360",
        duration: 5,
        ease: "bounce.out",
      });
      gsap.to(box2.current, {
        x: -576,
        rotation: "-=360",
        duration: 5,
        ease: "bounce.out",
        delay: 5,
      });
    },
    { scope: container }
  );

  useEffect(() => {
    setTimeout(() => {
      setAnimation(null);
    }, 11000);
  }, []);

  // Animation with fullscreen ICT-Campus text and it looks like a type animation with blinking cursor
  return (
    <div
      className="h-screen flex items-center justify-center bg-primary"
      ref={container}
    >
      <div
        className="bg-black h-44 w-44 rounded-3xl -translate-x-[400px] -translate-y-32"
        ref={box}
      ></div>
      <div
        className="bg-black h-44 w-44 rounded-3xl translate-x-[400px] translate-y-32"
        ref={box2}
      ></div>
    </div>
  );
}
