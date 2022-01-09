import { createSlice } from "@reduxjs/toolkit";

export const tagsListSlice = createSlice({
    name: "tagsList",
    initialState: { value: {tags: "", link: "", id: 0} },
    reducers: {
        add: ( state, action ) => {
            state.value = action.payload;
        },
    },
});

export const { add } = tagsListSlice.actions;

export default tagsListSlice.reducer;