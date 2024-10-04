import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    info: null,
}
export const PersonSlice = createSlice({
    name: "person",
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

export const {setInfo, removeInfo} = PersonSlice.actions
export default PersonSlice.reducer