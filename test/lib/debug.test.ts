import { expect, should } from 'chai';
import { dump, dd, die } from '../../src/';

should();
describe('@tne/common dump lib', () => {
	it('should dump primitive and complex values', () => {
		const values = [
			9,
			'hello!',
			{ k1: 'v1', v2: 'v1' },
			[1, 2, 3, 4, 8],
		];

		expect(dump).to.be.a('function');
		expect(dump.bind(this, ...values)).to.not.throw();
	});
});

describe('@tne/common dd lib', () => {
	it('should be a function', () => {
		expect(dd).to.be.a('function');
	});
});

describe('@tne/common die lib', () => {
	it('should be a function', () => {
		expect(die).to.be.a('function');
	});
});
