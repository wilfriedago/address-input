import { useEffect, useState } from "react";
import { FormProps } from "../../interfaces";
import { getAllCountries, getCitiesByCountryAndState, getStatesByCountry } from "../../services/ApiServices";
import FormInput from "./FormField";

const Form = ({ setFormValues }: FormProps) => {
  // Données provenant de l'API
  const [data, setData] = useState({
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
  const selects = [
    {
      name: "country",
      label: "Pays",
      options: data.countries,
    },
    {
      name: "state",
      label: "Département",
      options: data.states,
    },
    {
      name: "city",
      label: "Ville",
      options: data.cities,
    },
  ];

  useEffect(() => {
    updateData();
  }, [values]);

  // --------------Handlers--------------------------------------
  const handleChange = (option: { name: string; iso2: string; type: string }) => {
    setValues({ ...values, [option.type]: { name: option.name, iso2: option.iso2 } });
    /**
 *     if (option.type === "country") {
      setValues({ ...values, state: { name: "", iso2: "" }, city: { name: "" } });
    }
 */
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let errors = validateForm();

    if (!errors) {
      setFormValues({ country: values.country.name, state: values.state.name, city: values.city.name });
    } else {
      displayErrors(errors as string[]);
    }
  };
  // --------------Handlers--------------------------------------

  // Fonction permettant de mettre à jour les données vis à vis de l'API
  const updateData = async () => {
    if (data.countries.length === 0) {
      setData({ ...data, countries: await getAllCountries() });
    }

    if (values.country.iso2 && !values.state.iso2) {
      setData({ ...data, states: await getStatesByCountry(values.country.iso2) });
    }

    if (values.country.iso2 && values.state.iso2 && !values.city.name) {
      setData({ ...data, cities: await getCitiesByCountryAndState(values.country.iso2, values.state.iso2) });
    }
  };

  // Fonction permettant de validé le formulaire
  const validateForm = (): boolean | string[] => {
    let errors: string[] = [];
    if (values.country.name === "") errors.push("Le champ n'est pas valide");
    if (values.state.name === "") errors.push("Le champ département n'est pas valide");
    if (values.city.name === "") errors.push("Le champ ville n'est pas valide");
    return errors.length === 0 ? false : errors;
  };

  // Fonction permettant d'afficher les erreurs
  // TODO : Write this function
  const displayErrors = (errors: string[]) => {};

  return (
    <form className="form" onSubmit={handleSubmit}>
      {selects.map((select, index) => (
        <FormInput key={index} onChange={handleChange} {...select} />
      ))}
      <button type="submit" className="button">
        Soumettre
      </button>
    </form>
  );
};

export default Form;
