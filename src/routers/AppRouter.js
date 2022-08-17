import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<ExpenseDashboardPage />} />
                <Route path="create" element={<AddExpensePage />} />
                <Route path="edit" element={<EditExpensePage />}>
                    <Route path=":expenseId" element={<EditExpensePage />} />
                </Route>
                <Route path="help" element={<HelpPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
);

export default AppRouter;