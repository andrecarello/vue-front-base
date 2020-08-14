/**
 * Apenas números
 *
 * @param string
 * @returns {*}
 */
export const strOnlyNumber = (string) => {
	return string.replace(/[^\d]+/g, '');
};

/**
 * Array com range de números setados
 *
 * @param min
 * @param max
 * @returns {Array}
 */
export const rangeNumber = (min = 1, max = 12) => {
	let arr = [];

	for (let i = min; i <= max; i++) {
		let a = '';

		if (i < 10) a = '0' + i.toString();
		else a = i.toString();

		arr.push(a);
	}

	return arr;
};

/**
 * Validação do CPF
 *
 * @param cpf
 * @returns {boolean}
 */
export const validaCPF = (cpf) => {
	cpf = cpf.replace(/[^0-9]/gi, '');

	if ((cpf = cpf.replace(/[^\d]/g, '')).length !== 11) return false;

	if (cpf === '00000000000') return false;

	let r;
	let s = 0;

	for (let i = 1; i <= 9; i++) s = s + Number(cpf[i - 1]) * (11 - i);

	r = (s * 10) % 11;

	if (r === 10 || r === 11) r = 0;

	if (r !== Number(cpf[9])) return false;

	s = 0;

	for (let i = 1; i <= 10; i++) s = s + Number(cpf[i - 1]) * (12 - i);

	r = (s * 10) % 11;

	if (r === 10 || r === 11) r = 0;

	if (r !== Number(cpf[10])) return false;

	return true;
};

/**
 *  Realiza a contagem de caracteres para limitar a exibicao do texto
 *
 * @param str
 * @param chars
 * @param ellipsis
 * @returns {string|*}
 */
export const charCount = (str, chars, ellipsis = '...') => {
	if (str.length > chars) {
		return str.substring(0, chars) + ellipsis;
	}

	return str;
};

/**
 *
 * @param name
 * @param ext
 * @returns {string|*}
 */
export const rename = (name, ext) => {
	if (name.indexOf(ext) > -1) {
		return name;
	} else {
		return `${_.capitalize(name)}${ext}`;
	}
};

/**
 * Set overflow on window
 *
 * @param open
 */
export const bodyOverflow = (open) => {
	document.getElementsByTagName('body')[0].style.overflow = open ? 'hidden' : 'auto';
};

/**
 *
 */
export const days = () => {
	let arr = [];

	for (let i = 1; i <= 31; i++) {
		let a = '';

		if (i < 10) a = '0' + i.toString();
		else a = i.toString();

		arr.push(a);
	}

	return arr;
};

export const months = () => {
	let arr = [];

	for (let i = 1; i <= 12; i++) {
		let a = '';

		if (i < 10) a = '0' + i.toString();
		else a = i.toString();

		arr.push(a);
	}

	return arr;
};

export const years = (min = 1920, max = 1999) => {
	let arr = [];

	// i = 2019 / 2019 >= 1960
	for (let i = max; i >= min; i--) {
		arr.push(i.toString());
	}
	return arr;
};
