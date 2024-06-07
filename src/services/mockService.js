import mockData from "../mocks/data.json";

/**
 * Récupère les données utilisateur simulées.
 *
 * @returns {Promise<Object>} Une promesse qui se résout avec les données utilisateur simulées.
 */
export const getMockUserById = () => {
  return new Promise((resolve, reject) => {
    const user = mockData;
    if (user) {
      resolve(user);
    } else {
      reject(new Error("Utilisateur non trouvé"));
    }
  });
};

/**
 * Récupère les données d'activité simulées.
 *
 * @returns {Promise<Object>} Une promesse qui se résout avec les données d'activité simulées.
 */
export const getMockActivityData = () => {
  return new Promise((resolve, reject) => {
    const activity = mockData.activity;
    if (activity) {
      resolve(activity);
    } else {
      reject(new Error("Données d'activité non trouvées"));
    }
  });
};

/**
 * Récupère les données de sessions simulées.
 *
 * @returns {Promise<Object>} Une promesse qui se résout avec les données de sessions simulées.
 */
export const getMockSessionsData = () => {
  return new Promise((resolve, reject) => {
    const sessions = mockData.sessions;
    if (sessions) {
      resolve(sessions);
    } else {
      reject(new Error("Données de sessions non trouvées"));
    }
  });
};

/**
 * Récupère les données de performance simulées.
 *
 * @returns {Promise<Object>} Une promesse qui se résout avec les données de performance simulées.
 */
export const getMockPerformanceData = () => {
  return new Promise((resolve, reject) => {
    const performance = mockData.stats;
    if (performance) {
      resolve(performance);
    } else {
      reject(new Error("Données de performance non trouvées"));
    }
  });
};
