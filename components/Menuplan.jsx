import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Menuplan() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenuplan();
  }, []);

  function fetchMenuplan() {
    // Fetch the engehalde menuplan using a cors proxy
    fetch(
      "https://justcors.com/l_qz630cg8wmf/https://restaurant-engehalde.sv-restaurant.ch/de/menuplan/"
    )
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        let parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");
        let menuItem = doc.querySelectorAll(".item-content");
        let newMenu = [];
        for (let i = 0; i < 3; i++) {
          const item = {
            category: menuItem[i].querySelector(".menuline").innerText,
            title: menuItem[i].querySelector(".menu-title").innerText,
          };
          newMenu.push(item);
        }
        setMenu(newMenu);
      })
      .catch(function (err) {
        console.error("Failed to fetch page: ", err);
      });
  }

  return (
    <div className="card h-[99%] mt-5">
      <div className="flex flex-row justify-start items-center w-[calc(100%-84px)]">
        <FontAwesomeIcon
          className="text-primary text-[3.5rem] ms-8"
          icon={faUtensils}
        />{" "}
        <h1 className="title pt-1.5 mx-auto">Menuplan</h1>
      </div>
      <hr className="divider" />
      <div className="w-full flex flex-col justify-center items-center text-center gap-4">
        {menu.map((item, index) => (
          <div key={index} className="w-full">
            <h2 className="title text-2xl text-primary">{item.category}</h2>
            <p className="text-secondary text font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
