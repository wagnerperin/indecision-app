import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "expenses",
    initialState: {
        expenses: [],
        filters: {
            text: '',
            sortBy: 'date',
            startDate: undefined,
            endDate: undefined
        }
    },
    reducers: {
        addExpense: {
            reducer: (state, action) => {
                state.expenses.push(action.payload);
            },
            prepare: ({ 
                description = '', 
                note = '',
                amount = 0,
                createdAt = 0 
            }) => ({ payload: {
                id: self.crypto.randomUUID(),
                description,
                note,
                amount,
                createdAt
            }})
        },
        removeExpense: {
            reducer: (state, action) => {
                state.expenses = state.expenses.filter(({ id }) => id !== action.payload);
            },
            prepare: (id = 0) => ({ payload: id })
        },
        editExpense: {
            reducer: (state, action) => {
                const { id, updates } = action.payload;
                const expense = state.expenses.find(({ id }) => id === action.payload.id);
                Object.assign(expense, updates);
            },
            prepare: (id = 0, updates = {}) => ({ payload: { id, updates } })
        }
    }
});

const store = configureStore({ reducer: counterSlice.reducer });

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(counterSlice.actions.addExpense({
    description: 'Rent',
    note: 'This is the final payment',
    amount: 100,
    createdAt: 0
}));

const expenseTwo = store.dispatch(counterSlice.actions.addExpense({
    description: 'Rent 2',
    note: 'This is the final payment 2',
    amount: 200,
    createdAt: 0
}));

console.log(expenseOne.payload.id);
store.dispatch(counterSlice.actions.removeExpense(expenseOne.payload.id));
store.dispatch(counterSlice.actions.editExpense(expenseTwo.payload.id, { amount: 500 }));