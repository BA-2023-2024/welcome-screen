import { faStairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Etagenuebersicht() {
  return (
    <div className="card mt-5">
      <div className="flex flex-row justify-start items-center w-[calc(100%-84px)]">
        <FontAwesomeIcon
          className="text-primary text-5xl ms-8"
          icon={faStairs}
        />{" "}
        <h1 className="title pt-1.5 mx-auto">Etagenübersicht</h1>
      </div>
      <hr className="divider" />
      <div className="grid-container my-1">
        <div className="title text-primary text-2xl">1. OG</div>
        <div className="text font-medium">Gesprächsräume, Backoffice P114</div>
        <div className="title text-primary text-2xl">EG</div>
        <div className="text font-medium">Basisausbildung Informatik</div>
        <div className="title text-primary text-2xl">1. UG</div>
        <div className="text font-medium">
          Competence Center for Young Professionals PF33
        </div>
        <div className="title text-primary text-2xl">2. UG</div>
        <div className="text font-medium">VNTR, PF 31</div>
      </div>
    </div>
  );
}
