import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    info: null,
}
export const TvSlice = createSlice({
    name: "tv",
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

export const {setInfo, removeInfo} = TvSlice.actions
export default TvSlice.reducer