
import Anonymous from "./Helpers/Anonymous";
import Interactions from "./Helpers/Interactions";

export const PROJECT_NAME = "Gannex";
export const CLIENT_NAME  = "Oston";
export const ANONYMOUS = 'IAMOston';
export const INTERACTIONS = true;
export const TEST_EMAIL = 'teste@oston.io';
export const TEST_PASSWORD = 'oston1808';
export const CLIENT_EMAIL_SUPPORT = "";

export default {
  title: (page = '') => {
    document.title = `${PROJECT_NAME} | ${page}`
  },
  anonymous: () => {
    if ( !localStorage.getItem(ANONYMOUS) ) return Anonymous.init();

    return null
  },
  interactions: (schema) => {
    if (INTERACTIONS)
      return Interactions.init({schema: schema});

    return null
  }
};
