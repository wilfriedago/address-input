import { useState, useEffect } from "react";
import { getAllCountries } from "../../services/ApiServices";
import FormInput from "./FormInput";

const Form = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    {
      /* getAllCountries().then((data: any) => {
      console.log(data);
    });
     */
    }
  });

  const handleSubmit = () => {
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <FormInput id="country" name="country" label="Pays" dataListID="countries" dataList={countries} />
      <FormInput id="state" name="state" label="Département" dataListID="states" dataList={states} />
      <FormInput id="city" name="city" label="Ville" dataListID="cities" dataList={cities} />
      <button type="submit" className="button">
        Soumettre
      </button>
    </form>
  );
};

export default Form;
