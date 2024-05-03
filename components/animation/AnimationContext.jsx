import { useEffect } from "react";
import ICTCampusAnimation from "./ICTCampus";
import Blocks from "./Blocks";
import GridBlocks from "./GridBlocks";

export default function AnimationContext({ animation, setAnimation }) {
  const animationChoices = ["ICTCampus", "Blocks", "GridBlocks"];

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
        case "Blocks":
          setAnimation(<Blocks setAnimation={setAnimation} />);
          break;
        case "GridBlocks":
          setAnimation(<GridBlocks setAnimation={setAnimation} />);
          break;
        default:
          setAnimation(null);
          break;
      }
    }, 60000);
    return () => clearInterval(interval);
  }, [animation]);

  return null; // Render nothing directly from AnimationContext
}
