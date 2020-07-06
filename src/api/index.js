// Global data available anywhere
import Axios from "axios";

const apiUrl = "https://disease.sh/v3/covid-19/all";


export const getGlobalData = async () => {
    const { data: { cases, deaths } } = await Axios.get(apiUrl);
    const results = { cases, deaths };
    return results;
}