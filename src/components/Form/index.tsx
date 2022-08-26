import { useEffect, useState } from "react";
import { apiData } from "../../interfaces";
import FormInput from "./FormInput";
import { getAllCountries, getCitiesByCountryAndState, getStatesByCountry } from "../../services/ApiServices";

const Form = () => {
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
  }, []);

  // --------------Handlers--------------------------------------
  const handleChange = (e: any) => {
    let list = inputs.find((i) => i.name === e.target.name)?.datalist;
    let iso2 = getIsoCode(e.target.value, list);

    if (iso2 || existInList(e.target.value, list))
      setValues({ ...values, [e.target.name]: { name: e.target.value, iso2: iso2 } });

    updateData();
    // simulatedUpdateData();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
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
    if (values.country.iso2 !== "") {
      // We fetch states data based on country
      setData({ ...data, states: await getStatesByCountry(values.country.iso2) });
    } else {
      // We fetch all countries data
      setData({ ...data, countries: await getAllCountries() });
    }

    if (values.country.iso2 !== "" && values.state.iso2 !== "") {
      // We fetch cities data based on country & state
      setData({ ...data, cities: await getCitiesByCountryAndState(values.country.iso2, values.state.iso2) });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {inputs.map((input, index) => (
        <FormInput key={index} onChange={handleChange} {...input} />
      ))}
      <button type="submit" className="button">
        Soumettre
      </button>
    </form>
  );
};

export default Form;
