import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastProvider } from "react-toast-notifications";
import "./Styles/index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// root rendering 
root.render(
  // <ToastProvider autoDismiss autoDismissTimeout={5000} placement="top-left">
    <React.StrictMode>
      <App />
      <ToastContainer/>
    </React.StrictMode>
  // </ToastProvider>
);