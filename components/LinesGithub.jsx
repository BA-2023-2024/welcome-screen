"use client";

import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function LinesGithub() {
  const [lines, setLines] = useState(0);

  useEffect(() => {
    getTotalLinesOfCode().then((lines) => setLines(lines));
  }, []);

  function calculateTotal(x) {
    let total = 0;
    x.forEach((contributor) => {
      contributor.weeks.forEach((week) => {
        total += week.a - week.d;
      });
    });

    return total;
  }

  async function fetchLinesOfCode(repo) {
    try {
      const response = await fetch(`${repo.url}/stats/contributors`, {
        headers: {
          Authorization: "Bearer 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",
        },
      });
      const data = await response.json();
      if (Object.keys(data).length === 0 && data.constructor === Object) {
        return 0;
      }

      return calculateTotal(data);
    } catch (error) {
      return 0;
    }
  }

  async function getTotalLinesOfCode() {
    const allRepos = await fetch(
      "https://api.github.com/orgs/BA-2023-2024/repos?type=all",
      {
        headers: {
          Authorization: "Bearer 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",
        },
      }
    ).then((response) => response.json());

    const promises = allRepos.map(fetchLinesOfCode);
    const linesOfCodeArray = await Promise.all(promises);

    const totalLinesOfCode = linesOfCodeArray.reduce(
      (acc, curr) => acc + curr,
      0
    );

    return totalLinesOfCode;
  }

  // Fetch the total lines of code every 5 minutes
  setInterval(async () => {
    const lines = await getTotalLinesOfCode();
    setLines(lines);
  }, 300000);

  return (
    <div className="card mt-5 py-[2.5rem]">
      <div className="flex flex-col items-center w-full my-auto relative">
        <div className="flex flex-col justify-center text-center absolute left-3 top-1/2 -translate-y-1/2">
          <FontAwesomeIcon className="text-primary text-4xl" icon={faCode} />
          <h1 className="title text-2xl mt-1.5">Codezeilen</h1>
        </div>
        <h1 className="title font-medium text-center">
          +/- {lines.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}
        </h1>
      </div>
    </div>
  );
}
