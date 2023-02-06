import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { CustomProvider } from 'rsuite';
import { Provider } from "react-redux";
import store from "./store/index.store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
        <CustomProvider theme="high-contrast">
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CustomProvider>
    </Provider>
);