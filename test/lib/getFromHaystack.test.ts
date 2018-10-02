import { expect, should } from 'chai';
import { getFromHaystack } from '../../src/';
import { data } from '../fixtures/getFromHaystack';

should();
describe('@tne/common getFromHaystack lib', () => {
	it('should be callable', () => {
		expect(getFromHaystack).to.be.a('function');
		expect(getFromHaystack.bind(this, 'some', data)).to.not.throw();
	});

	it('should return a nested value when it exists', () => {
		const expected1 = data.compilerOptions.lib[0];
		const expected2 = data.exclude;

		expect(getFromHaystack('compilerOptions.lib[0]', data)).to.be.equal(expected1);
		expect(getFromHaystack('exclude', data)).to.be.equal(expected2);
	});

	it('should return "null" if nested value does not exists', () => {
		expect(getFromHaystack('compilerOptions.lib[3]', data)).to.be.equal(null);
		expect(getFromHaystack('compilerOptions.Module', data)).to.be.equal(null);
	});

	it('should return custom default value if nested value does not exists and it is provided', () => {
		const defaultValue1 = 'DefaultValue';
		const defaultValue2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

		expect(getFromHaystack('compilerOptions.lib[3]', data, defaultValue1)).to.be.equal(defaultValue1);
		expect(getFromHaystack('compilerOptions.Module', data, defaultValue2)).to.be.equal(defaultValue2);
	});
});
