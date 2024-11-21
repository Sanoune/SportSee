/* eslint-disable react-refresh/only-export-components */
// DataContext.js

import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

// Crée un contexte pour stocker les données partagées
const DataContext = createContext();

// Hook personnalisé pour utiliser le contexte de données
export let useDataContext = () => useContext(DataContext);

// Fournisseur de données qui enveloppe l'application et fournit le contexte de données à ses enfants
export const DataProvider = ({ children }) => {
  // Initialise useMockData avec la valeur stockée dans localStorage, ou true par défaut
  const [useMockData, setUseMockData] = useState(() => {
    return true;
    // const storedValue = localStorage.getItem("useMockData");

    // return storedValue !== null ? JSON.parse(storedValue) : true;
  });

  // Effet pour mettre à jour la valeur stockée dans localStorage à chaque changement de useMockData
  useEffect(() => {
    localStorage.setItem("useMockData", JSON.stringify(useMockData));
  }, [useMockData]);

  // Fonction pour basculer entre les données réelles et les données simulées
  const toggleDataMode = () => {
    setUseMockData((prev) => !prev);
  };

  return (
    <DataContext.Provider value={{ useMockData, toggleDataMode }}>
      {children}
    </DataContext.Provider>
  );
};

// Prop types pour le composant DataProvider
DataProvider.propTypes = {
  children: PropTypes.node,
};

export default DataContext;
