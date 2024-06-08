import mockData from "../mocks/data.json";

/**
 * Récupère les données utilisateur simulées.
 *
 * @returns {Object} Les données utilisateur simulées.
 * @throws {Error} Si l'utilisateur n'est pas trouvé.
 */
export const getMockUserById = () => {
  const user = mockData;
  if (user) {
    return user;
  } else {
    throw new Error("Utilisateur non trouvé");
  }
};

/**
 * Récupère les données d'activité simulées.
 *
 * @returns {Object} Les données d'activité simulées.
 * @throws {Error} Si les données d'activité ne sont pas trouvées.
 */
export const getMockActivityData = () => {
  const activity = mockData.activity;
  if (activity) {
    return activity;
  } else {
    throw new Error("Données d'activité non trouvées");
  }
};

/**
 * Récupère les données de sessions simulées.
 *
 * @returns {Object} Les données de sessions simulées.
 * @throws {Error} Si les données de sessions ne sont pas trouvées.
 */
export const getMockSessionsData = () => {
  const sessions = mockData.sessions;
  if (sessions) {
    return sessions;
  } else {
    throw new Error("Données de sessions non trouvées");
  }
};

/**
 * Récupère les données de performance simulées.
 *
 * @returns {Object} Les données de performance simulées.
 * @throws {Error} Si les données de performance ne sont pas trouvées.
 */
export const getMockPerformanceData = () => {
  const performance = mockData.stats;
  if (performance) {
    return performance;
  } else {
    throw new Error("Données de performance non trouvées");
  }
};
