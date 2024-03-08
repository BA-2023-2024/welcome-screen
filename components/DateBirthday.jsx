import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DateBirthday() {
  const currentDate = new Date().toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const birthdays = [
    {
      title: "Lucas Geburstag",
      date: "26.2",
    },
    {
      title: "Jolin's Geburstag",
      date: "12.3",
    },
    {
      title: "Nadine's Geburstag",
      date: "13.3",
    },
    {
      title: "Joel's Geburstag",
      date: "14.3",
    },
  ];

  const todayBirthday =
    birthdays.filter((birthday) => {
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const today = day + "." + month;
      return birthday.date === today;
    }) || [];

  return (
    <div className="card mt-5">
      <div className="flex flex-row justify-start items-center w-[calc(100%-84px)]">
        <FontAwesomeIcon
          className="text-primary text-6xl ms-8"
          icon={faCalendarDays}
        />{" "}
        <h1 className="title pt-1.5 mx-auto">{currentDate}</h1>
      </div>
      <hr className="divider" />
      <div className="w-full flex flex-col justify-center items-center text-center">
        {todayBirthday.length > 0 ? (
          <h2 className="text text-text text-xl">Heute ist ein Geburstag!</h2>
        ) : (
          <h2 className="text text-muted text-lg">
            Heute hat keiner Geburtstag
          </h2>
        )}
        <h2 className="text text-text text-xl mt-4">Nächste Geburstage:</h2>
        <ul>
          {birthdays.map((birthday, index) => (
            <li key={index}>
              <p className="text text-primaryDark">
                {birthday.title}, {birthday.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
