import { mdiHandWaveOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function Empfang() {
  return (
    <div className="card mt-5 h-full">
      <div className="flex flex-row justify-start items-center w-[calc(100%-84px)]">
        <Icon
          path={mdiHandWaveOutline}
          className="text-primary text-6xl ms-8"
          size={2.4}
        />
        <h1 className="title pt-1.5 mx-auto">Empfang</h1>
      </div>
      <hr className="divider" />
      <div className="w-full flex flex-col justify-center items-center text-center">
        <p className="text font-medium">Hast du einen Termin im Campus?</p>
        <p className="text font-medium">
          Oder bist du auf der Suche nach jemandem?
        </p>
        <p className="text font-medium mt-8">
          Gehe ins 1. UG zum Empfang im CCYP
        </p>
      </div>
    </div>
  );
}
