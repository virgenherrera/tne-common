import { readdirSync } from 'fs';
import { join, extname, parse } from 'path';
import { pathExists } from './fsExists';

const allowedFileExtensions = ['.ts', '.js', '.json'];

export async function requireDir(...pathSegments: string[]): Promise<any> {
	const path = join(...pathSegments);

	const fileNames = readdirSync(path).filter(file => allowedFileExtensions.indexOf(extname(file)) > -1);
	const promisedModules = fileNames.map(file => import(join(path, file)));
	const modules = await Promise.all(promisedModules);

	return fileNames.reduce((acc, file, k) => {
		const { name } = parse(file);

		acc[name] = modules[k];

		return acc;
	}, {});
}

export function requireDirSync(...pathSegments: string[]): any {
	const path = join(...pathSegments);

	try {
		if (!pathExists(path)) {
			throw new Error(`${pathSegments} does not lead to an existent path`);
		}

		const fileNames = readdirSync(path).filter(file => allowedFileExtensions.indexOf(extname(file)) > -1);

		return fileNames.reduce((acc, file) => {
			const { name } = parse(file);

			acc[name] = require(join(path, file));

			return acc;
		}, {});
	} catch (E) {
		throw TypeError(`Method:requireDirSync|Reason:${E}`);
	}
}
