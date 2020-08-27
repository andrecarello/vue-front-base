import { rename } from './Helpers/Misc';

export const _CONTROLLER = (_controllerName) => {
	if (typeof _controllerName === 'string') {
		let _controller = rename(_controllerName, 'Controller');

		if (_.controllers.indexOf(_controller) > -1) {
			const _loadController = require(`./controllers/${_controller}`).default;

			if (typeof _loadController === 'function') {
				return new _loadController();
			} else {
				throw `Verifique se o controlador ${_.capitalize(_controllerName)} está sendo exportado como default`;
			}
		}
	} else {
		throw `Registro passado no App ${_.capitalize(_controllerName)}, não foi encontrado na Controller`;
	}
};
