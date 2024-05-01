"use client";

import { faWater } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function AareTemperature() {
  const [temperature, setTemperature] = useState();

  useEffect(() => {
    fetchTemp();
  }, []);

  useEffect(() => {
    // Fetch the temperature from the api every 5 minutes
    const interval = setInterval(() => {
      fetchTemp();
    }, 300000);
    return () => clearInterval(interval);
  }, []);

  function fetchTemp() {
    // Fetch the aare temperature from the aareguru api
    fetch("https://aareguru.existenz.ch/v2018/current?city=bern")
      .then((response) => response.json())
      .then((data) => {
        // Return only the first after comman value
        setTemperature(
          (Math.floor(data.aare.temperature_prec * 10) / 10).toFixed(1)
        );
      });
  }

  return (
    <div className="card mt-5 py-[1.35rem] w-full">
      <div className="flex flex-row justify-start items-center w-full my-auto">
        <div className="flex flex-col justify-center text-center">
          <FontAwesomeIcon className="text-primary text-4xl" icon={faWater} />
          <h1 className="title mt-1 text-2xl">Aare</h1>
        </div>
        <h1 className="title ms-12 mx-auto font-medium">{temperature}°C</h1>
      </div>
    </div>
  );
}
