import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Fonts} from "./styles/fonts";
import { GlobalStyles } from "./styles/globalStyles";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fonts />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
