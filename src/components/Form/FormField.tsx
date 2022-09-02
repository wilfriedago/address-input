import { useEffect, useState } from "react";
import Select from "react-select";
import { FormFieldProps } from "../../interfaces";

const FormInput = ({ name, label, options, onChange }: FormFieldProps) => {
  useEffect(() => {
    toggleLoading();
    console.log(options);
  }, [options]);

  const [isLoading, setIsloading] = useState(false);

  const toggleLoading = () => {
    setIsloading(!isLoading);
  };

  const localHandler = (option: any) => {
    onChange({ name: option.label, iso2: option.value, type: name });
  };

  return (
    <div className="flex flex-col mx-2 mb-5  w-4/5">
      <label className="ml-2" htmlFor={name}>
        {label}
      </label>
      <Select
        id={name}
        name={name}
        isSearchable={true}
        isLoading={isLoading}
        onChange={localHandler}
        options={options.map((data: any) => {
          return { label: data.name, value: data.iso2 ?? "" };
        })}
      />
    </div>
  );
};

export default FormInput;
