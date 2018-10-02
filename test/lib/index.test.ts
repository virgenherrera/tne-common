import { expect, should } from 'chai';
import * as Common from '../../src/';

should();
describe('@tne/common index', () => {
	it('each library should exist and be a function', () => {
		Object.keys(Common).forEach(mod => {
			expect(Common).to.have.property(mod);
			expect(Common[mod]).to.be.a('function');
		});
	});
});
