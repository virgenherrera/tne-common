const nl = '\n';

export function dump(...args: any[]) {
	console.log(`${nl}Start Data dumping...`);

	args.forEach((arg, k) => {
		// Notify about which arg are dumping
		console.log(`${nl}Argument: ${k}`);

		// print type
		console.log(`Type: ${typeof arg}`);

		// print length if is array
		if (Array.isArray(arg)) {
			console.log(`Length: ${arg.length}`);
		}

		// print keys if is object
		if (typeof arg === 'object' && !Array.isArray(arg)) {
			console.log(`Keys: '${Object.keys(arg).join(`','`)}'`);
		}

		// print Value in log if is primitive in dir if not
		if (arg !== Object(arg)) {
			console.log(`Value: ${arg}`);
		} else {
			console.log('Value:');
			console.dir(arg);
		}
	});

	console.log(`${nl}data dump done!${nl}`);
}

export function die() {
	console.log(`${nl}now Process will die`);
	process.exit(1);
}

export function dd(...args: any[]) {
	dump(...args);
	die();
}
