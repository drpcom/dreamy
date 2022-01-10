import { createSlice } from "@reduxjs/toolkit";

export const countersSlice = createSlice({
    name: 'counters',
    initialState: { value: { flames: 0, love: 0, sexy: 0, neutral: 0, funny: 0, scary: 0, mindblowing: 0, sad: 0 } },
    reducers: {
        incrementFlames: (state) => {
            state.value.flames++
        },
        incrementLove: (state) => {
            state.value.love++
        },
        incrementSexy: (state) => {
            state.value.sexy++
        },
        incrementNeutral: (state) => {
            state.value.neutral++
        },
        incrementFunny: (state) => {
            state.value.funny++
        },
        incrementScary: (state) => {
            state.value.scary++
        },
        incrementMindblowing: (state) => {
            state.value.mindblowing++
        },
        incrementSad: (state) => {
            state.value.sad++
        },
    }
})

export const { 
    incrementFlames, 
    incrementLove, 
    incrementSexy, 
    incrementNeutral,
    incrementFunny,
    incrementScary,
    incrementMindblowing,
    incrementSad
} = countersSlice.actions;

export default countersSlice.reducer;