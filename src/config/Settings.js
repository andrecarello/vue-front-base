import Anonymous from '../Helpers/Anonymous';
import Interactions from '../Helpers/Interactions';

export const PROJECT_NAME = '';
export const CLIENT_NAME = '';
export const ANONYMOUS = 'uuid';
export const INTERACTIONS = true;
export const TEST_EMAIL = '';
export const TEST_PASSWORD = '';
export const CLIENT_EMAIL_SUPPORT = '';

export default {
	title: (page = '') => {
		if (page) document.title = `${page} | ${PROJECT_NAME}`;
		else document.title = PROJECT_NAME;
	},

	anonymous: () => {
		if (!localStorage.getItem(ANONYMOUS)) return Anonymous.init();

		return null;
	},

	interactions: (schema) => {
		if (INTERACTIONS) return Interactions.init({ schema: schema });

		return null;
	}
};
