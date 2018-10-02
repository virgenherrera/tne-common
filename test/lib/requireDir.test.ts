import { expect, should } from 'chai';
import { requireDir } from '../../src/';

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

	it('should be callable', async () => {
		expect(requireDir).to.be.a('function');
		expect(async () => await requireDir(__dirname, '/../fixtures/requireDir')).to.not.throw();
	});

	it('should require asynchronously entire path', async () => {
		const expected = requireModules();
		const data = await requireDir(__dirname, '/../fixtures/requireDir');

		expect(data).to.be.deep.equal(expected);
	});
});
