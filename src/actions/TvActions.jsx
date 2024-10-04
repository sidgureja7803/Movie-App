import { setInfo } from "../reducers/TvSlice";
import axios from "../utils/Axios";

export const asyncloadTv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const external_ids = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
    let allDetails = {
      detail: detail.data,
      external_ids: external_ids.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      videos: videos.data.results.find(m=> m.type === 'Trailer'),
      watchproviders: watchproviders.data.results.IN,
    };
    dispatch(setInfo(allDetails))
    console.log(allDetails);
  } catch (error) {
    console.log(`Error : ` + error);
  }
};
