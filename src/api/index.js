// Global data available anywhere
import Axios from "axios";

const apiUrl = "https://disease.sh/v3/covid-19/all";

const continentApi = 'https://disease.sh/v3/covid-19/continents';


export const getGlobalData = async () => {
    const { data: { cases, deaths } } = await Axios.get(apiUrl);
    const results = { cases, deaths };
    return results;
}

export const getContinentData = async () => {
    const { data } = await Axios.get(continentApi);
    return data;
}

