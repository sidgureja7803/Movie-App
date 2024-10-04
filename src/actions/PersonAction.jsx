import { setInfo } from "../reducers/PersonSlice";
import axios from "../utils/Axios";

export const asyncloadPerson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const external_ids = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`/person/${id}/combined_credits`);
    const tvCredits = await axios.get(`/person/${id}/tv_credits`);
    const movieCredits = await axios.get(`/person/${id}/movie_credits`);

    let allDetails = {
      detail: detail.data,
      external_ids: external_ids.data,
      combinedCredits : combinedCredits.data,
      tvCredits : tvCredits.data,
      movieCredits : movieCredits.data,

    };
    dispatch(setInfo(allDetails));
    console.log(allDetails);
  } catch (error) {
    console.log(`Error : ` + error);
  }
};
