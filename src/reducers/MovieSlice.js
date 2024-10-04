import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    info: null,
}
export const MovieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setInfo: (state, action) => {
            state.info = action.payload;
        },
        removeInfo : (state, action) => {
            state.info = null;
        }
    }
})

export const {setInfo, removeInfo} = MovieSlice.actions
export default MovieSlice.reducer