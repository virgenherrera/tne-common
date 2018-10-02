import { expect, should } from 'chai';
import {
	lcFirst,
	ucFirst,
	toCamelCase,
	to_snake_case,
	TO_CONSTANT_CASE,
	ToTitleCase,
	strMask,
} from '../../src/lib/strTransform';

should();
describe('@tne/common strTransform lib', () => {
	it('should be callable', () => {
		expect(lcFirst).to.be.a('function');
		expect(ucFirst).to.be.a('function');
		expect(toCamelCase).to.be.a('function');
		expect(to_snake_case).to.be.a('function');
		expect(TO_CONSTANT_CASE).to.be.a('function');
		expect(ToTitleCase).to.be.a('function');
		expect(strMask).to.be.a('function');
	});

	it('should transform string to "Lowercase First"', () => {
		const str = 'STRING';
		const expected = 'sTRING';

		expect(lcFirst.bind(this, str)).to.not.throw();
		expect(lcFirst(str)).to.be.equal(expected);
	});

	it('should transform string to "Uppercase First"', () => {
		const str = 'string';
		const expected = 'String';

		expect(ucFirst.bind(this, str)).to.not.throw();
		expect(ucFirst(str)).to.be.equal(expected);
	});

	it('should transform string to "toCamelCase"', () => {
		const str = 'lorem ipsum dolor';
		const expected = 'loremIpsumDolor';

		expect(toCamelCase.bind(this, str)).to.not.throw();
		expect(toCamelCase(str)).to.be.equal(expected);
	});

	it('should transform string to "toCamelCase" and "Uppercase First"', () => {
		const str = 'lorem ipsum dolor';
		const expected = 'LoremIpsumDolor';

		expect(toCamelCase.bind(this, str, true)).to.not.throw();
		expect(toCamelCase(str, true)).to.be.equal(expected);
	});

	it('should transform string to "to_snake_case"', () => {
		const str = 'lorem ipsum dolor';
		const expected = 'lorem_ipsum_dolor';

		expect(to_snake_case.bind(this, str)).to.not.throw();
		expect(to_snake_case(str)).to.be.equal(expected);
	});

	it('should transform string to "TO_CONSTANT_CASE"', () => {
		const str = 'lorem ipsum dolor';
		const expected = 'LOREM_IPSUM_DOLOR';

		expect(TO_CONSTANT_CASE.bind(this, str)).to.not.throw();
		expect(TO_CONSTANT_CASE(str)).to.be.equal(expected);
	});

	it('should transform string to "ToTitleCase"', () => {
		const str = 'lorem ipsum dolor';
		const expected = 'Lorem Ipsum Dolor';

		expect(ToTitleCase.bind(this, str)).to.not.throw();
		expect(ToTitleCase(str)).to.be.equal(expected);
	});

	it('should transform string to "ToTitleCase" with "=" as glue', () => {
		const str = 'lorem ipsum dolor';
		const expected = 'Lorem=Ipsum=Dolor';

		expect(ToTitleCase.bind(this, str, '=')).to.not.throw();
		expect(ToTitleCase(str, '=')).to.be.equal(expected);
	});

	it('should transform string to "provided mask"', () => {
		const str = 'loremIpsumDolor';
		const expected = 'lore-mIps-umDo-lo';

		expect(strMask.bind(this, str)).to.not.throw();
		expect(strMask(str)).to.be.equal(expected);
	});
});
