"use client";

import { useEffect, useState } from "react";

export default function PersonSwitcher({ data }) {
  const [increment, setIncrement] = useState(-1);
  const maxIncrement = 38;
  const [currentPerson, setCurrentPerson] = useState();

  useEffect(() => {
    setIncrement(0);
    setCurrentPerson(shuffled[0]);
  }, []);

  useEffect(() => {
    // Update the current person every 7 seconds
    const interval = setInterval(() => {
      setCurrentPerson(shuffled[increment]);
      setIncrement((increment) => (increment + 1) % maxIncrement);
    }, 7000);
    return () => clearInterval(interval);
  }, [increment]);

  // Randomly shuffle the people array
  const shuffled = data
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return (
    <div className="card p-0 h-full">
      <div className="w-full h-full flex flex-col justify-between items-center text-center">
        {currentPerson && (
          <div className="flex flex-col text-center mx-auto justify-center h-full mt-12">
            <div className="h-[24rem] w-[24rem] object-cover relative">
              {data.map((person, index) => (
                <img
                  key={index}
                  src={`https://welcomescreen.blob.core.windows.net/images/${
                    person.firstname
                  }${person.image_suffix ? "-" + person.image_suffix : ""}.jpg`}
                  alt={person.firstname}
                  className={`absolute top-0 left-0 h-[24rem] w-[24rem] rounded-2xl object-cover transition-all duration-500 ease-in-out ${
                    currentPerson.firstname + currentPerson.image_suffix ===
                    person.firstname + person.image_suffix
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="my-auto">
              <h2 className="title text-primary">{currentPerson.firstname}</h2>
              <p className="text mt-1 font-medium">{currentPerson.area}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
