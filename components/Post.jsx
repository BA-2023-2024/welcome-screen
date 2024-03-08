import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Post() {
  const posten = [
    {
      title: "BA-Raum",
      items: "Java, M5Stack",
    },
    {
      title: "Medienraum",
      items: "Minecraft-Mods, Websites",
    },
  ];

  return (
    <div className="card mt-5 h-full">
      <div className="flex flex-row justify-start items-center w-[calc(100%-84px)]">
        <FontAwesomeIcon
          className="text-primary text-6xl ms-8"
          icon={faScrewdriverWrench}
        />{" "}
        <h1 className="title pt-1.5 mx-auto">Posten</h1>
      </div>
      <hr className="divider" />
      <div className="w-full flex flex-col justify-center items-center text-center">
        <ul>
          {posten.map((post, index) => (
            <li key={index}>
              <h2 className="title text-xl">
                <span className="text-primary">{post.title}: </span>
                <span className="text-text">{post.items}</span>
              </h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
