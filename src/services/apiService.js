import axios from "axios";
import { DataFormatter } from "../formatting/Formatting";

/**
 * Récupère les données utilisateur par ID utilisateur.
 *
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise<Object>} Une promesse qui se résout avec les données utilisateur normalisées.
 * @throws Lèvera une erreur si la requête échoue.
 */
export async function getUserDataById(userId) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}`, {
      headers: { Accept: "application/json" },
    });

    const formatter = new DataFormatter(response.data.data);
    return formatter.normalizeUserData();
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données utilisateur :",
      error
    );
    throw error;
  }
}

/**
 * Récupère les données d'activité pour un utilisateur par ID utilisateur.
 *
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise<Object>} Une promesse qui se résout avec les données d'activité normalisées.
 * @throws Lèvera une erreur si la requête échoue.
 */
export async function getActivityData(userId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/activity`,
      {
        headers: { Accept: "application/json" },
      }
    );
    const sessions = response.data.data.sessions || [];
    const formatter = new DataFormatter(sessions);

    return formatter.normalizeActivityData();
  } catch (error) {
    console.error(
      "Erreur lors de la récupération et du formatage des données d'activité :",
      error
    );
    throw error;
  }
}

/**
 * Récupère les données de session moyenne pour un utilisateur par ID utilisateur.
 *
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise<Object>} Une promesse qui se résout avec les données de session normalisées.
 * @throws Lèvera une erreur si la requête échoue.
 */
export async function averageSessionsData(userId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/average-sessions`,
      {
        headers: { Accept: "application/json" },
      }
    );

    const sessions = response.data.data.sessions || [];
    const formatter = new DataFormatter(sessions);
    return formatter.normalizeSessionsData();
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de session moyenne :",
      error
    );
    throw error;
  }
}

/**
 * Récupère les données de performance pour un utilisateur par ID utilisateur.
 *
 * @param {string} userId - L'ID de l'utilisateur.
 * @returns {Promise<Object>} Une promesse qui se résout avec les données de performance normalisées.
 * @throws Lèvera une erreur si la requête échoue.
 */
export async function getPerformanceData(userId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/performance`,
      {
        headers: { Accept: "application/json" },
      }
    );
    const formatter = new DataFormatter(response.data.data.data);
    return formatter.normalizeStatsData();
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des données de performance :",
      error
    );
    throw error;
  }
}
