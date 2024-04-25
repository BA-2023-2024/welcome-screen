import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { useEffect, useRef } from "react";

export default function ICTCampusAnimation({ setAnimation }) {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(TextPlugin);

  const container = useRef();
  const textEl = useRef();

  useGSAP(
    () => {
      gsap.to(textEl.current, {
        duration: 3,
        text: "ICT-Campus",
        ease: "none",
      });
    },
    { scope: container }
  );

  useEffect(() => {
    setTimeout(() => {
      setAnimation(null);
    }, 5000);
  }, []);

  // Animation with fullscreen ICT-Campus text and it looks like a type animation with blinking cursor
  return (
    <div
      className="h-screen flex items-center justify-center bg-primary"
      ref={container}
    >
      <h1 className="text-[10rem] font-bold text-black" ref={textEl}></h1>
    </div>
  );
}
