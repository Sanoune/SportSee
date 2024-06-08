# Application SportSee

SportSee est une application de suivi de l'activité physique et de la nutrition, permettant aux utilisateurs de visualiser leurs données personnelles, telles que les séances d'entraînement, les calories brûlées, les performances, et plus encore.

Pour démarrer :

## Backend

- [Lien vers le backend](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git)

## Frontend

- Installer Node v18.20.2
- `npm install` : Installer les dépendances
- `npm run dev` : Démarrer le serveur de développement frontend

## Structure du Projet

Le projet est structuré de la manière suivante :

- `src/` : Répertoire contenant le code source de l'application.
- `components/` : Composants réutilisables de l'application.
- `context/` : Contexte de données pour la gestion des données partagées.
- `hooks/` : Hooks personnalisés pour la récupération des données.
- `pages/` : Pages de l'application.
- `services/` : Services pour la récupération des données depuis l'API ou des données simulées.
- `formatting/` : Utilitaires pour formater les données brutes.
- `mocks/` : Données simulées pour le développement et les tests.
- `index.js` : Point d'entrée de l'application.
- `App.js` : Configuration du routage et fourniture du contexte de données.
- `index.css` : Fichier de styles global.

## Technologies Utilisées

- React.js : Bibliothèque JavaScript pour la création d'interfaces utilisateur.
- React Router : Bibliothèque de routage pour la navigation dans l'application.
- Axios : Bibliothèque HTTP pour effectuer des requêtes réseau.
- PropTypes : Validation des propriétés des composants.
- JSDoc : Documentation du code source à l'aide de commentaires JSDoc.
