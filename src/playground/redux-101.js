import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        incrementBy: {
            reducer: (state, action) => { state.value += action.payload },
            prepare: (amount) => ({ payload: amount || 1 })
        },
        decrement: (state) => {
            state.value -= 1;
        },
        decrementBy: {
            reducer: (state, action) => { state.value -= action.payload },
            prepare: (amount) => ({ payload: amount || 1 })
        },
        reset: (state) => {
            state.value = 0;
        },
        set: {
            reducer: (state, action) => { state.value = action.payload },
            prepare: (value) => ({ payload: value || 0 })
        }
    }
});

const store = configureStore({ reducer: counterSlice.reducer });

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.increment());
store.dispatch(counterSlice.actions.incrementBy());
store.dispatch(counterSlice.actions.decrementBy(10));
store.dispatch(counterSlice.actions.decrement());
store.dispatch(counterSlice.actions.set(100));
store.dispatch(counterSlice.actions.reset());
