import axios from "axios";

// Chargement de l'apiKey depuis les variables d'environnement
const apiKey: string = process.env.REACT_APP_APIKEY as string;

// Configuration de base d'axios
const api = axios.create({
  baseURL: "https://api.countrystatecity.in/v1/countries/",
  timeout: 5000,
  headers: { "X-CSCAPI-KEY": apiKey },
});

// Récupération de la liste de toutes les pays
export const getAllCountries = async () => {
  try {
    return await api.get(`/`);
  } catch (error) {
    console.error("error", error);
  }
};

// Récupération de la liste de tout les départements par pays
export const getStateByCountry = async (country: string) => {
  try {
    return await api.get(`/`);
  } catch (error) {
    console.error("error", error);
  }
};

// Récupération de la liste des villes par départements
export const getCitiesByState = async (state: string) => {
  try {
    return await api.get(`/`);
  } catch (error) {
    console.error("error", error);
  }
};

// Récupération de la liste des villes par pays
export const getCitiesByCountry = async (country: string) => {
  try {
    return await api.get(`/`);
  } catch (error) {
    console.error("error", error);
  }
};

// Récupération de la liste des villes par département et par pays
export const getCitiesByStateAndCountry = async (state: string, country: string) => {
  try {
    return await api.get(`/`);
  } catch (error) {
    console.error("error", error);
  }
};
