import { promises as fs } from "fs";
import GlobalHandler from "@/components/GlobalHandler";
import { parse } from "papaparse";

export default async function Home() {
  const rawFile = await fs.readFile(process.cwd() + "/app/data.csv", "utf8");
  const data = parse(rawFile, {
    header: true,
    skipEmptyLines: true,
    complete: function (results) {
      return results.data;
    },
  });

  return <GlobalHandler data={data.data} />;
}
