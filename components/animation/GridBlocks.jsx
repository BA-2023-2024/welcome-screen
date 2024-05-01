import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function GridBlocks({ setAnimation }) {
  gsap.registerPlugin(useGSAP);

  const container = useRef();

  useGSAP(
    () => {
      var grid = [7, 13], //[rows, columns]
        tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

      document.getElementById("container").innerHTML = "";

      buildGrid({
        grid: grid,
        className: "box",
        width: 1870,
        gutter: 20,
        parent: "#container",
      });

      //helper function to build a grid of <div> elements
      function buildGrid(vars) {
        vars = vars || {};
        var container = document.createElement("div"),
          rows = vars.grid[0] || 5,
          cols = vars.grid[1] || 5,
          width = vars.width || 100,
          gutter = vars.gutter || 1,
          className = vars.className || "",
          w = (width - cols * gutter) / cols,
          parent =
            typeof vars.parent === "string"
              ? document.querySelector(vars.parent)
              : vars.parent
              ? vars.parent
              : document.body,
          css =
            "display: inline-block; border-radius: 10px; scale: 0; margin: 0 " +
            (gutter / width) * 100 +
            "% " +
            (gutter / width) * 100 +
            "% 0; width: " +
            (w / width) * 100 +
            "%;",
          l = rows * cols,
          i,
          box;
        for (i = 0; i < l; i++) {
          box = document.createElement("div");
          box.style.cssText = css;
          box.setAttribute("class", className);
          box.index = i;
          box.setAttribute("data-index", i);
          container.appendChild(box);
        }
        container.style.cssText =
          "width:" +
          width +
          "px; line-height: 0; padding:" +
          gutter +
          "px 0 0 " +
          gutter +
          "px; display:inline-block;";
        parent.appendChild(container);
        return container;
      }

      function animateBoxes(from, axis, ease) {
        tl.to(".box", {
          duration: 3,
          scale: 1,
          y: 0,
          ease: "power1.inOut",
          stagger: {
            amount: 1.5,
            grid: grid,
            axis: axis,
            ease: ease,
            from: "end",
          },
        });

        tl.to(".box", {
          duration: 3,
          scale: 0,
          y: 60,
          ease: "power1.inOut",
          stagger: {
            amount: 1.5,
            grid: grid,
            axis: axis,
            ease: ease,
            from: "random",
          },
        });
      }

      animateBoxes("center");
    },
    { scope: container }
  );

  useEffect(() => {
    setTimeout(() => {
      setAnimation(null);
    }, 9000);
  }, []);

  // Animation with fullscreen ICT-Campus text and it looks like a type animation with blinking cursor
  return (
    <div
      className="h-screen bg-black flex items-center overflow-visible justify-center"
      id="container"
      ref={container}
    ></div>
  );
}
