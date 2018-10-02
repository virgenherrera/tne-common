import { expect, should } from 'chai';
import { requireDirSync } from '../../src/';

should();
describe('@tne/common requireDirSync lib', () => {
	function requireModules() {
		return {
			module1: require('../fixtures/requireDir/module1'),
			module2: require('../fixtures/requireDir/module2'),
			module3: require('../fixtures/requireDir/module3'),
			module4: require('../fixtures/requireDir/module4'),
		};
	}

	it('should be callable', () => {
		expect(requireDirSync).to.be.a('function');
		expect(requireDirSync.bind(this, __dirname, '/../fixtures/requireDir')).to.not.throw();
	});

	it('should  throw if path are invalid', () => {
		expect(requireDirSync.bind(this, __dirname, '/../fixtures/require_dir')).to.throw();
	});

	it('should require synchronously entire path', () => {
		const expected = requireModules();

		expect(requireDirSync(__dirname, '/../fixtures/requireDir')).to.be.deep.equal(expected);
	});
});
