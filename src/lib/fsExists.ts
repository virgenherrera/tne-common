import { existsSync, lstatSync } from 'fs';

export function pathExists(path: string): boolean {
	return path && existsSync(path) && lstatSync(path).isDirectory();
}

export function fileExists(path: string): boolean {
	return path && existsSync(path) && lstatSync(path).isFile();
}
