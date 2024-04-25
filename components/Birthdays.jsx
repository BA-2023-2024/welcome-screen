import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Birthdays() {
  const currentDate = new Date().toLocaleDateString("de-DE", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const birthdays = [
    {
      title: "Lucas",
      date: "26.2",
    },
    {
      title: "Jolin's",
      date: "30.4",
    },
    {
      title: "Jolin's",
      date: "30.4",
    },
    {
      title: "Jolin's",
      date: "30.4",
    },
    {
      title: "Jolin's",
      date: "30.4",
    },
    {
      title: "Jolin's",
      date: "30.4",
    },
    {
      title: "Nadine's",
      date: "25.4",
    },
    {
      title: "Joel's",
      date: "26.4",
    },
  ];

  const todayBirthday =
    birthdays.filter((birthday) => {
      const date = new Date();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const today = day + "." + month;
      if (today === birthday.date) {
        return birthday.title;
      }
    }) || [];

  function buildString(todayBirthday) {
    // Build string for 1 or more birthdays
    if (todayBirthday.length === 1) {
      return `<span class="text-primary">${todayBirthday[0].title}</span>`;
    } else {
      let string = "";
      todayBirthday.forEach((birthday, index) => {
        if (index === todayBirthday.length - 1) {
          string +=
            " und " + `<span class="text-primary">${birthday.title}</span>`;
        } else {
          if (index === todayBirthday.length - 2) {
            string += `<span class="text-primary">${birthday.title}</span>`;
          } else {
            string +=
              `<span class="text-primary">${birthday.title}</span>` + ", ";
          }
        }
      });
      return string;
    }
  }

  function displayBirthdays() {
    // Only show birthdays that are in the future
    // Only show maximum of 5 birthdays
    let futureBirthdays = [];
    birthdays.forEach((birthday) => {
      if (
        new Date().getMonth() + 1 === parseInt(birthday.date.split(".")[1]) &&
        new Date().getDate() < parseInt(birthday.date.split(".")[0])
      ) {
        futureBirthdays.push(birthday);
      }
    });

    // Sort birthdays by date
    futureBirthdays.sort((a, b) => {
      return (
        parseInt(a.date.split(".")[1]) - parseInt(b.date.split(".")[1]) ||
        parseInt(a.date.split(".")[0]) - parseInt(b.date.split(".")[0])
      );
    });

    if (futureBirthdays.length > 5) {
      return futureBirthdays.slice(0, 5);
    } else {
      return futureBirthdays;
    }
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
          <h2 className="text text-text text-xl font-medium">
            Heute ist{" "}
            <span
              dangerouslySetInnerHTML={{ __html: buildString(todayBirthday) }}
            ></span>{" "}
            Geburtstag!
          </h2>
        ) : (
          <h2 className="text text-muted text-lg">
            Heute hat keiner Geburtstag
          </h2>
        )}
        <h2 className="text text-text text-xl mt-4">Nächste Geburstage:</h2>
        <ul>
          {displayBirthdays().map((birthday, index) => (
            <li key={index}>
              <p className="text text-primaryDark font-medium">
                {birthday.title} Geburtstag, {birthday.date}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
