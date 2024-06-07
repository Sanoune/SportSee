import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Stocke la fonction console.error d'origine
const error = console.error;
// Redéfinit console.error pour ignorer les avertissements relatifs aux defaultProps
console.error = (...args) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

// Rend l'application dans le DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
