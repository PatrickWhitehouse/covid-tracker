import Axios from "axios";

const apiUrl = "https://covid19.mathdro.id/api";

export const callApi = async () => {
  try {
    const res = await Axios.get(apiUrl);
    console.log("api called");
    return res;
  } catch (e) {
    console.log("error", e);
  }
};
