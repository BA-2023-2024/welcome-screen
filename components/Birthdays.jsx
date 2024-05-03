import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Birthdays({ data }) {
  const currentDate = new Date().toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const todayBirthday =
    data.filter((birthday) => {
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const today = day + "." + month;
      if (today === birthday.birthdate) {
        return birthday.firstname;
      }
    }) || [];

  function buildString(todayBirthday) {
    // Build string for 1 or more birthdays
    if (todayBirthday.length === 1) {
      return `<span class="text-primary">${todayBirthday[0].firstname}'${
        todayBirthday[0].firstname.slice(-1) !== "s" && "s"
      }</span>`;
    } else {
      let string = "";
      todayBirthday.forEach((birthday, index) => {
        if (index === todayBirthday.length - 1) {
          string +=
            " und " +
            `<span class="text-primary">${birthday.firstname}'${
              birthday.firstname.slice(-1) !== "s" ? "s" : ""
            }</span>`;
        } else {
          if (index === todayBirthday.length - 2) {
            string += `<span class="text-primary">${birthday.firstname}'${
              birthday.firstname.slice(-1) !== "s" ? "s" : ""
            }</span>`;
          } else {
            string +=
              `<span class="text-primary">${birthday.firstname}'${
                birthday.firstname.slice(-1) !== "s" ? "s" : ""
              }</span>` + ", ";
          }
        }
      });
      return string;
    }
  }

  function displayBirthdays() {
    let futureBirthdays = [];
    // Function goes around the year starting from tomorrow and ending at yesterday and adds all birthdays to the futureBirthdays array
    for (let i = 1; i < 365; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const tomorrow = day + "." + month;
      data.forEach((birthday) => {
        if (tomorrow === birthday.birthdate) {
          futureBirthdays.push(birthday);
        }
      });
    }

    // Only show the next 5 birthdays
    futureBirthdays = futureBirthdays.slice(0, 4);

    return futureBirthdays;
  }

  return (
    <div className="card">
      <div className="flex flex-row justify-start items-center w-[calc(100%-84px)]">
        <FontAwesomeIcon
          className="text-primary text-6xl ms-8"
          icon={faCalendarDays}
        />{" "}
        <h1 className="title pt-1.5 mx-auto">Kalender</h1>
      </div>
      <hr className="divider" />
      <h1 className="title text-center w-full text-2xl">{currentDate}</h1>
      <hr className="divider" />
      <div className="w-full flex flex-col justify-center items-center text-center">
        {todayBirthday.length > 0 ? (
          <h2 className="text text-text text-2xl font-medium">
            Heute ist{" "}
            <span
              dangerouslySetInnerHTML={{ __html: buildString(todayBirthday) }}
            ></span>{" "}
            Geburtstag!
          </h2>
        ) : (
          <h2 className="text text-muted text-lg">
            Heute feiern wir keinen Geburtstag
          </h2>
        )}
        <h2 className="text text-text text-xl mt-4">Nächste Geburstage:</h2>
        <ul>
          {displayBirthdays().map((birthday, index) => (
            <li key={index}>
              <p className="text text-primaryDark font-medium text-xl">
                {birthday.firstname}&apos;
                {birthday.firstname.slice(-1) !== "s"
                  ? "s"
                  : ""} Geburtstag, {birthday.birthdate}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
