import { expect, should } from 'chai';
import { loadJsonFile } from '../../src/';

should();
describe('@tne/common getFromHaystack lib', () => {
	function requireJSON() {
		return require('../../package.json');
	}

	it('should be callable', () => {
		expect(loadJsonFile).to.be.a('function');
		expect(loadJsonFile.bind(this, __dirname, '../../package.json')).to.not.throw();
	});

	it('should throw if path is not reachable', () => {
		expect(loadJsonFile.bind(this, '/non/existent/path/to/jsonFile.json')).to.throw();
	});

	it('should require existent json file', async () => {
		const expected = requireJSON();

		expect(loadJsonFile(__dirname, '../../package.json')).to.be.deep.equal(expected);
	});
});
