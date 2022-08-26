import { FormInputProps } from "../../interfaces";
import Datalist from "./Datalist";

const FormInput = ({ name, label, datalistID, datalist, onChange }: FormInputProps) => {
  return (
    <div className="flex flex-col mx-2">
      <label className="ml-2" htmlFor={name}>
        {label}
      </label>
      <input type="text" className="input" id={name} name={name} list={datalistID} onChange={onChange} required />
      <Datalist id={datalistID} list={datalist} />
    </div>
  );
};

export default FormInput;
