import { readFileSync } from 'fs';
import { join } from 'path';
import { fileExists } from './fsExists';
import { Exceptions } from '../constant/Exceptions';

export function loadJsonFile(...pathSegments: string[]): any {
	const path = join(...pathSegments);

	try {
		if (fileExists(path)) {
			return JSON.parse(`${readFileSync(path)}`);
		}

		const E = {
			msg: Exceptions.invalidJSONFile,
			path: Exceptions.appPathInterpolation.replace(':path', path),
		};

		throw E;

	} catch (E) {
		E.failingFilePath = path;
		throw E;
	}
}
