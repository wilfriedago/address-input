import { apiData, DatalistProps } from "../../interfaces";

const Datalist = ({ id, list }: DatalistProps) => {
  return (
    <datalist id={id}>
      {list.map((option: any, index) => (
        <option key={index} value={option.name} data-iso2={option.iso2} />
      ))}
    </datalist>
  );
};

export default Datalist;
