import { createSlice } from "@reduxjs/toolkit";

export const tagsListSlice = createSlice({
    name: "tagsList",
    initialState: { value: {tags: "", link: "", id: 0} },
    reducers: {
        add: ( state, action ) => {
            state.value = action.payload;
        },
        remove: ( state ) => {
            state.value = []
        },
    },
});

export const { add, remove } = tagsListSlice.actions;

export default tagsListSlice.reducer;