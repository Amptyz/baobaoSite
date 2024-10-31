import { createSlice } from "@reduxjs/toolkit";



interface BackgroundState {
    isEnter: boolean;
}

const initialState: BackgroundState = {
    isEnter: false
}

const backgroundSlice = createSlice({
    name: 'background',
    initialState,
    reducers: {
        enterIn: (state) =>{
            state.isEnter = true;
        },
        leaveOut: (state) => {
            state.isEnter = false;
        }
    }
})
export const {enterIn, leaveOut} = backgroundSlice.actions;
export default backgroundSlice.reducer;