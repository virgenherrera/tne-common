const splitRegex = /-|_| |\/|\\/;

export function lcFirst(str: string): string {
	return `${str.charAt(0).toLowerCase()}${str.slice(1)}`;
}

export function ucFirst(str: string): string {
	return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}

export function toCamelCase(str: string, ucF: boolean = false): string {
	return str
		.split(splitRegex)
		.reduce((acc, v, k) => {
			acc += (k === 0 && !ucF) ? lcFirst(v) : ucFirst(v);

			return acc;
		}, '');
}

export function to_snake_case(str: string): string {
	return str
		.split(splitRegex)
		.map((v) => v.toLowerCase())
		.join('_');
}

export function TO_CONSTANT_CASE(str: string): string {
	return str
		.split(splitRegex)
		.map((v) => v.toUpperCase())
		.join('_');
}

export function ToTitleCase(str: string, glue: string = ' '): string {
	return str
		.split(splitRegex)
		.filter(v => (v))
		.map((v) => ucFirst(v))
		.join(glue);
}

export function strMask(number: number | string, mask: string = '0000-0000-0000-00'): string {
	const replacer = mask.charAt(0);
	const str = number.toString();
	let res = '';

	for (let iMask = 0, iStr = 0; iMask < mask.length && iStr < str.length; iMask++) {
		res += (mask.charAt(iMask) === replacer) ? str.charAt(iStr++) : mask.charAt(iMask);
	}

	return res;
}
