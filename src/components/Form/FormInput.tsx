import { FormInputProps } from "../../interfaces";

const FormInput = ({ name, label, datalistID, datalist, onBlur }: FormInputProps) => {
  return (
    <div className="flex flex-col mx-2">
      <label className="ml-2" htmlFor={name}>
        {label}
      </label>
      <input type="text" className="input" id={name} name={name} list={datalistID} onBlur={onBlur} required />
      <datalist id={datalistID}>
        {datalist.map((option: any, index) => (
          <option key={index} value={option.name} data-iso2={option.iso2} />
        ))}
      </datalist>
    </div>
  );
};

export default FormInput;
