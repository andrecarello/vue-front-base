import { ANONYMOUS } from '../config/Settings';

class Interactions {
	static currentOS() {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;

		if (/windows phone/i.test(userAgent)) return 'Windows Phone';
		if (/android/i.test(userAgent)) return 'Android';
		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return 'iOS';
		if (/MacIntel/.test(navigator.platform)) return 'Mac OS';

		return 'unknown';
	}

	static ls() {
		return {
			anonymous: localStorage.getItem(ANONYMOUS)
		};
	}

	static init(obj) {
		const url = '';

		const schema = {
			os: this.currentOS(),
			to: obj.to || '',
			from: obj.from || '',
			gaTo: obj.gaTo || '',
			gaFrom: obj.gaFrom || '',
			msisdn: this.ls().msisdn,
			anonymous: this.ls().anonymous,
			onlyNavigation: false,
			host: window.location.hostname,
			referer: 'OI OFERTAS',
			listPlans: obj.listPlans || '',
			cluster: obj.cluster || 0,
			status: obj.status || '',
			plan: obj.plan || '',
			balance: obj.balance || 0
		};
		console.log(schema);

		// axios.post(url, {
		//     data: JSON.stringify(this.schema(schema))
		// })
	}
}

export default Interactions;
