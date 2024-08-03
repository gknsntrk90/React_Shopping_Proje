import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './hoc_components/hoc_App'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import { ProductProvider } from './context/productContext';
import { BasketProvider } from './context/basketContext';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
    <ProductProvider>
    <App />
    </ProductProvider>
    </BasketProvider>
    <ToastContainer autoClose={1500} />
  </React.StrictMode>

)
