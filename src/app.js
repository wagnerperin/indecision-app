import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const appRoot = ReactDOM.createRoot(document.getElementById('app'));

appRoot.render(AppRouter);