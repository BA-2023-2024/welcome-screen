"use client";

import { useEffect, useState } from "react";

export default function PersonSwitcher() {
  const [increment, setIncrement] = useState(-1);
  const maxIncrement = 38;

  const people = [
    {
      name: "Adrian",
      profession: "Plattformentwickler",
      image: "01.jpg",
    },
    {
      name: "Atavinthan",
      profession: "PiBS",
      image: "02.jpg",
    },
    {
      name: "Dan",
      profession: "Applikationsentwickler",
      image: "03.jpg",
    },
    {
      name: "David",
      profession: "Plattformentwickler",
      image: "04.jpg",
    },
    {
      name: "Emre",
      profession: "Applikationsentwickler",
      image: "05.jpg",
    },
    {
      name: "Fabian",
      profession: "Applikationsentwickler",
      image: "06.jpg",
    },
    {
      name: "Ivo",
      profession: "Applikationsentwickler",
      image: "07.jpg",
    },
    {
      name: "Janis",
      profession: "Applikationsentwickler",
      image: "08.jpg",
    },
    {
      name: "Janis",
      profession: "PiBS",
      image: "09.jpg",
    },
    {
      name: "Joel",
      profession: "ICT-Fachmann",
      image: "10.jpg",
    },
    {
      name: "Jolin",
      profession: "Applikationsentwicklerin",
      image: "11.jpg",
    },
    {
      name: "Julia",
      profession: "Applikationsentwicklerin",
      image: "12.jpg",
    },
    {
      name: "Kay",
      profession: "Applikationsentwickler",
      image: "13.jpg",
    },
    {
      name: "Levin",
      profession: "Applikationsentwickler",
      image: "14.jpg",
    },
    {
      name: "Levin",
      profession: "Applikationsentwickler",
      image: "15.jpg",
    },
    {
      name: "Levyn",
      profession: "Applikationsentwickler",
      image: "16.jpg",
    },
    {
      name: "Linn",
      profession: "Applikationsentwicklerin",
      image: "17.jpg",
    },
    {
      name: "Lorik",
      profession: "Plattformenwickler",
      image: "18.jpg",
    },
    {
      name: "Lucas",
      profession: "Applikationsentwickler",
      image: "19.jpg",
    },
    {
      name: "Macarena",
      profession: "PiBS",
      image: "20.jpg",
    },
    {
      name: "Matthias",
      profession: "Plattformenwickler",
      image: "21.jpg",
    },
    {
      name: "Mattias",
      profession: "Applikationsentwickler",
      image: "22.jpg",
    },
    {
      name: "Maximilian",
      profession: "Applikationsentwickler",
      image: "23.jpg",
    },
    {
      name: "Moritz",
      profession: "Applikationsentwickler",
      image: "24.jpg",
    },
    {
      name: "Nemanja",
      profession: "Plattformenwickler",
      image: "25.jpg",
    },
    {
      name: "Noa",
      profession: "PiBS",
      image: "26.jpg",
    },
    {
      name: "Noah",
      profession: "Plattformenwickler",
      image: "27.jpg",
    },
    {
      name: "Patrick",
      profession: "PiBS",
      image: "28.jpg",
    },
    {
      name: "Rafael",
      profession: "PiBS",
      image: "29.jpg",
    },
    {
      name: "Ramon",
      profession: "Plattformenwickler",
      image: "30.jpg",
    },
    {
      name: "Raphael",
      profession: "Applikationsentwickler",
      image: "31.jpg",
    },
    {
      name: "Roger",
      profession: "Applikationsentwickler",
      image: "32.jpg",
    },
    {
      name: "Sander",
      profession: "PiBS",
      image: "33.jpg",
    },
    {
      name: "Simon",
      profession: "Applikationsentwickler",
      image: "35.jpg",
    },
    {
      name: "Tenzin",
      profession: "Applikationsentwickler",
      image: "36.jpg",
    },
    {
      name: "Tobias",
      profession: "Applikationsentwickler",
      image: "37.jpg",
    },
    {
      name: "Viet My",
      profession: "Applikationsentwickler",
      image: "38.jpg",
    },
    {
      name: "Yannick",
      profession: "Applikationsentwickler",
      image: "39.jpg",
    },
  ];

  // Randomly shuffle the people array
  const shuffled = people
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

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

  return (
    <div className="card p-0 h-full">
      <div className="w-full h-full flex flex-col justify-between items-center text-center">
        {currentPerson && (
          <div className="flex flex-col text-center mx-auto justify-center h-full mt-12">
            <div className="h-[30rem] w-[30rem] object-cover relative">
              {people.map((person, index) => (
                <img
                  key={index}
                  src={`/portraits/${person.image}`}
                  alt={person.name}
                  className={`absolute top-0 left-0 h-[30rem] w-[30rem] rounded-2xl object-cover transition-all duration-500 ease-in-out ${
                    currentPerson.image === person.image
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="my-auto">
              <h2 className="title text-primary">{currentPerson.name}</h2>
              <p className="text mt-1 font-medium">
                {currentPerson.profession}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
