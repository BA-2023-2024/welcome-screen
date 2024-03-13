import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const time =
        (hours < 10 ? "0" : "") +
        hours +
        ":" +
        (minutes < 10 ? "0" : "") +
        minutes;
      setTime(time);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card py-[1.35rem]">
      <div className="flex flex-row justify-start items-center w-[calc(100%-80px)]">
        <FontAwesomeIcon
          className="text-primary text-5xl ms-8"
          icon={faClock}
        />{" "}
        <h1 className="title pt-1.5 mx-auto">{time} Uhr</h1>
      </div>
    </div>
  );
}
