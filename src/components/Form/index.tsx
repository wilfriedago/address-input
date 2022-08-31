import { useEffect, useState } from "react";
import { apiData, FormProps } from "../../interfaces";
import FormInput from "./FormInput";
import { getAllCountries, getCitiesByCountryAndState, getStatesByCountry } from "../../services/ApiServices";

const Form = ({ setFormValues }: FormProps) => {
  // Données provenant de l'API
  const [data, setData] = useState<{ countries: apiData[]; states: apiData[]; cities: apiData[] }>({
    countries: [],
    states: [],
    cities: [],
  });

  // Valeurs des champs du formulaire
  const [values, setValues] = useState({
    country: { name: "", iso2: "" },
    state: { name: "", iso2: "" },
    city: { name: "" },
  });

  // Liste des champs du formulaire
  const inputs = [
    {
      name: "country",
      label: "Pays",
      datalistID: "countries",
      datalist: data.countries,
    },
    {
      name: "state",
      label: "Département",
      datalistID: "states",
      datalist: data.states,
    },
    {
      name: "city",
      label: "Ville",
      datalistID: "cities",
      datalist: data.cities,
    },
  ];

  useEffect(() => {
    updateData();
  }, [values]);

  // --------------Handlers--------------------------------------
  const handleBlur = async (e: any) => {
    let list = inputs.find((i) => i.name === e.target.name)?.datalist;
    let iso2 = getIsoCode(e.target.value, list);

    if (iso2 || existInList(e.target.value, list))
      setValues((values) => {
        return { ...values, [e.target.name]: { name: e.target.value, iso2: iso2 } };
      });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormValues({ country: values.country.name, state: values.state.name, city: values.city.name });
    console.log(values);
  };
  // --------------Handlers--------------------------------------

  // Fonction permettant de récupérer le code iso2 d'une valeur
  const getIsoCode = (value: string, valuesList: apiData[] | undefined) => {
    return valuesList !== undefined ? valuesList.find((listValue) => listValue.name === value)?.iso2 : undefined;
  };

  // Fonction permettant de vérifier si une valeur existe dans une liste
  const existInList = (value: string, valuesList: apiData[] | undefined) => {
    return valuesList !== undefined ? valuesList.some((listValue) => listValue.name === value) : false;
  };

  // Fonction permettant de mettre à jour les données vis à vis de l'API
  const updateData = async () => {
    if (data.countries.length === 0) setData({ ...data, countries: await getAllCountries() });

    if (values.country.iso2) setData({ ...data, states: await getStatesByCountry(values.country.iso2) });

    if (values.country.iso2 && values.state.iso2)
      setData({ ...data, cities: await getCitiesByCountryAndState(values.country.iso2, values.state.iso2) });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <FormInput key={index} onBlur={handleBlur} {...input} />
      ))}
      <button type="submit" className="button">
        Soumettre
      </button>
    </form>
  );
};

export default Form;
