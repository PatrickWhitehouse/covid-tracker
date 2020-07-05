import Axios from "axios";

const apiUrl = "https://covid19.mathdro.id/api";

export const callApi = async () => {
  try {
    const {
      data: { confirmed, recovered }
    } = await Axios.get(apiUrl);
    const dataRequired = {
      confirmed,
      recovered
    };
    return dataRequired;
  } catch (e) {
    console.log("error", e);
  }
};
