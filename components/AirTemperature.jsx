import { faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function AirTemperature() {
  const [temperature, setTemperature] = useState();

  useEffect(() => {
    fetchTemp();
  }, []);

  useEffect(() => {
    // Fetch the temperature from the api every 5 seconds
    const interval = setInterval(() => {
      fetchTemp();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  function fetchTemp() {
    fetch("https://aareguru.existenz.ch/v2018/current?city=bern")
      .then((response) => response.json())
      .then((data) => {
        // Return only the first after comman value
        setTemperature(
          (Math.floor(data.weather.current.tt * 10) / 10).toFixed(1)
        );
      });
  }

  return (
    <div className="card mt-5 py-[1.35rem]">
      <div className="flex flex-row justify-start items-center w-[calc(100%-80px)]">
        <div className="flex flex-col justify-center text-center ms-8">
          <FontAwesomeIcon
            className="text-primary text-5xl"
            icon={faTemperatureHalf}
          />
          <h1 className="title mt-2 text-2xl">Luft</h1>
        </div>
        <h1 className="title pt-1.5 mx-auto font-medium">{temperature}°C</h1>
      </div>
    </div>
  );
}
