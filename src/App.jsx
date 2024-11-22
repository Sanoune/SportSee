import { Route, HashRouter as Router, Routes } from "react-router-dom";
import UserDashboard from "../src/pages/UserDashboard";
import "./App.css";
import Layout from "./Layout";
import { DataProvider } from "./context/mockDataContext";
import ActivityPage from "./pages/ActivityPage";
import SessionDurationPage from "./pages/SessionDurationPage";
import StatsPage from "./pages/StatsPage";

/**
 * Composant représentant la racine de l'application.
 * Responsable de la configuration du routage et de la fourniture du contexte de données.
 *
 * @returns {JSX.Element} L'élément JSX racine de l'application.
 */
function App() {
  return (
    <Router>
      <DataProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            {/* Route pour afficher le tableau de bord de l'utilisateur */}
            <Route path="/user/:id" element={<UserDashboard />} />

            {/* Route pour afficher les performances de l'utilisateur */}
            <Route path="/user/:id/performance" element={<StatsPage />} />

            {/* Route pour afficher l'activité de l'utilisateur */}
            <Route path="/user/:id/activity" element={<ActivityPage />} />

            {/* Route pour afficher les sessions moyennes */}
            <Route
              path="/user/:id/average-sessions"
              element={<SessionDurationPage />}
            />
          </Routes>
        </Layout>
      </DataProvider>
    </Router>
  );
}

export default App;
