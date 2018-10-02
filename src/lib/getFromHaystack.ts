export function getFromHaystack(path: string, haystack: Object, defaultValue: any = null): any {
	const value =
		path
			.replace(/\[/g, '.')
			.replace(/\]/g, '')
			.split('.')
			.reduce((acc, part) => acc && acc[part], haystack);

	return value || defaultValue;
}
