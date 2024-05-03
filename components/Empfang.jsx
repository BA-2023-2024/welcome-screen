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
        <p className="text font-medium">
          Schön bist du da. Warte im 1. UG beim Empfangsbereich, bis wir dich
          abholen.
        </p>
      </div>
    </div>
  );
}
