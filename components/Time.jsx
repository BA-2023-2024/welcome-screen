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
    <div className="card mt-5 py-[2.5rem]">
      <div className="flex flex-col items-center w-full my-auto relative">
        <div className="flex flex-col justify-center text-center absolute left-[3.35rem] top-1/2 -translate-y-1/2">
          <FontAwesomeIcon className="text-primary text-4xl" icon={faClock} />
          <h1 className="title text-2xl mt-1.5">Zeit</h1>
        </div>
        <h1 className="title font-medium text-center">{time} Uhr</h1>
      </div>
    </div>
  );
}
