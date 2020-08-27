export const Masks = {

	msisdn: function (value) {
		let __regEx = value
					.replace(/\D/g, '')
					.replace(/(\d{2})(\d)/, '($1) $2')
					.replace(/(\d{5})(\d)/, '$1.$2')
					.replace(/(\d{5}).(\d{4})\d+?$/, '$1.$2');

		return __regEx;
	},

	pin: function (value) {
		let __regEx = value
					.replace(/\D/g, '')
					.replace(/(\d{4})\d+?$/, '$1');

		return __regEx;
	}
}
