/**
 * Classe utilisée pour formater les données brutes.
 * Elle fournit des méthodes pour normaliser différents types de données.
 */
export class DataFormatter {
  /**
   * Crée une instance de DataFormatter.
   *
   * @param {Object} rawData - Les données brutes à formater.
   */
  constructor(rawData) {
    this.rawData = rawData;
  }

  /**
   * Normalise les données d'activité.
   *
   * @returns {Array<Object>} Les données d'activité normalisées.
   */
  normalizeActivityData() {
    const sessions = this.rawData || [];
    return sessions.map((session) => ({
      kg: session.kilogram,
      kcal: session.calories,
    }));
  }

  /**
   * Normalise les données de sessions.
   *
   * @returns {Array<Object>} Les données de sessions normalisées.
   */
  normalizeSessionsData() {
    const sessions = this.rawData || [];
    return sessions.map((session) => ({
      day: this.getDayFromNumber(session.day),
      duration: session.sessionLength,
    }));
  }

  /**
   * Obtient le jour à partir de son numéro.
   *
   * @param {number} dayNumber - Le numéro du jour.
   * @returns {string} Le jour correspondant.
   */
  getDayFromNumber(dayNumber) {
    switch (dayNumber) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "M";
      case 4:
        return "J";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        return "";
    }
  }

  /**
   * Normalise les données de performance.
   *
   * @returns {Object} Les données de performance normalisées.
   */
  normalizeStatsData() {
    const rawData = this.rawData || [];
    const formattedStats = {};

    const statMapping = {
      1: "intensite",
      2: "vitesse",
      3: "force",
      4: "endurance",
      5: "energie",
      6: "cardio",
    };

    for (const data of rawData) {
      const key = statMapping[data.kind];
      if (key !== undefined) {
        formattedStats[key] = data.value;
      }
    }

    // Retourne un nouvel objet avec des clés spécifiques
    return {
      intensite: formattedStats.intensite,
      vitesse: formattedStats.vitesse,
      force: formattedStats.force,
      endurance: formattedStats.endurance,
      energie: formattedStats.energie,
      cardio: formattedStats.cardio,
    };
  }

  /**
   * Normalise les données utilisateur.
   *
   * @returns {Object} Les données utilisateur normalisées.
   */
  normalizeUserData() {
    return {
      firstname: this.rawData.userInfos.firstName || "",
      score:
        this.rawData.todayScore !== undefined
          ? this.rawData.todayScore
          : this.rawData.score !== undefined
          ? this.rawData.score
          : 0,
      calories: this.rawData.keyData.calorieCount || 0,
      proteines: this.rawData.keyData.proteinCount || 0,
      glucides: this.rawData.keyData.carbohydrateCount || 0,
      lipides: this.rawData.keyData.lipidCount || 0,
    };
  }
}
