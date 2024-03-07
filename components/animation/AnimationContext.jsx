import { useEffect, useState } from "react";
import ICTCampusAnimation from "./ICTCampus";

export default function AnimationContext({ animation, setAnimation }) {
  const animationChoices = ["ICTCampus"];

  useEffect(() => {
    if (animation != null) return;

    // Select a random animation at an interval of 10 seconds
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * animationChoices.length);
      const selectedAnimation = animationChoices[randomIndex];

      if (animation != null) return;

      switch (selectedAnimation) {
        case "ICTCampus":
          setAnimation(<ICTCampusAnimation setAnimation={setAnimation} />);
          break;
        default:
          setAnimation(null);
          break;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [animation]);

  return null; // Render nothing directly from AnimationContext
}
