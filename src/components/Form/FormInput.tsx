import React from "react";

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  dataListID: string;
  dataList: string[];
}

const FormInput = (props: FormInputProps) => {
  const handleInputEvent = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div className="flex flex-col mx-2">
      <label className="ml-2" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        type="text"
        className="input"
        id={props.id}
        name={props.name}
        list={props.dataListID}
        onInput={handleInputEvent}
      />
      <datalist id={props.dataListID}>
        {props.dataList.map((country, index) => {
          return React.createElement("option", { value: country, key: index });
        })}
      </datalist>
    </div>
  );
};

export default FormInput;
