import { DisplaySectionProps } from "../../interfaces";

const DisplaySection = ({ country, state, city }: DisplaySectionProps) => {
  return (
    <div className="mt-5 h-16 p-2 rounded bg-slate-800 text-white grid place-items-center">
      <p>
        Adresse : {country}, {state} {city}
      </p>
    </div>
  );
};

export default DisplaySection;
