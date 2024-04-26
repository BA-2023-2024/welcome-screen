import GlobalHandler from "@/components/GlobalHandler";
import { parse } from "papaparse";

export default async function Home() {
  const file = await fetch(
    "https://welcomescreen.blob.core.windows.net/csv/data.csv"
  ).then((response) => response.text());

  const data = parse(file, {
    header: true,
    skipEmptyLines: true,
    delimiter: ";",
    complete: function (results) {
      return results.data;
    },
  });

  return <GlobalHandler data={data.data} />;
}
