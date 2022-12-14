import axios from "axios";

// FIXME: Chargement de l'apiKey depuis les variables d'environnement
// const apiKey: string = process.env.REACT_APP_API_KEY as string;

// Configuration de base d'axios
const api = axios.create({
  baseURL: "https://api.countrystatecity.in/v1/countries",
  headers: { "X-CSCAPI-KEY": "eE1EdTAxanhWN3VtdEROYzJDU1JpTUdrNUxMbEdFNWF1M2QwSjBhYg==" },
});

// Handler d'erreurs
const handleError = (error: any) => {
  /**
   * 401 : Action non autorisé, ou clé d'API invalide
   * @return false
   * 404 : Erreur ressource non trouvé
   * @return [] empty array
   */
  return error.status === 401 ? false : [];
};

// Récupération de la liste de toutes les pays
export const getAllCountries = async () => {
  try {
    return await api.get(`/`).then((response) => {
      return response.data;
    });
  } catch (error) {
    return handleError(error);
  }
};

// Récupération de la liste de tout les départements par pays
export const getStatesByCountry = async (country: string) => {
  try {
    return await api.get(`/${country}/states/`).then((response) => {
      return response.data;
    });
  } catch (error) {
    return handleError(error);
  }
};

// Récupération de la liste des villes par département et par pays
export const getCitiesByCountryAndState = async (country: string, state: string) => {
  try {
    return await api.get(`/${country}/states/${state}/cities/`).then((response) => {
      return response.data;
    });
  } catch (error) {
    return handleError(error);
  }
};
