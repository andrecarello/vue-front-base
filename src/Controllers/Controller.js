import store from '../Store';

class Controller {
	constructor() {
		self.store = this.store = store;
		self.state = this.state = store.state;

		return new Proxy(this, {
			set(target, p, value, receiver) {
				if (typeof p === 'string' && p === 'loading') self.store.dispatch('LoadingModel/changeStatus', value);

				// -> Seta o valor
				target[p] = value;

				return true;
			},
			get(target, property) {
				return target[property];
			}
		});
	}

	dispatch() {
		this.store.dispatch(...arguments);
	}
}

export default Controller;
