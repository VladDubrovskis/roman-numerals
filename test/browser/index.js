import { h, render, rerender } from 'preact';
import { route } from 'preact-router';
import App from 'components/app';
import Converter from 'components/converter';
import 'style';

/*global sinon,expect*/

describe('App', () => {
	let scratch;

	before( () => {
		scratch = document.createElement('div');
		(document.body || document.documentElement).appendChild(scratch);
	});

	beforeEach( () => {
		scratch.innerHTML = '';
	});

	after( () => {
		scratch.parentNode.removeChild(scratch);
		scratch = null;
	});

	it('should render the homepage', () => {
		render(<App />, scratch);
		expect(scratch.innerHTML).to.contain('Home');
	});

	describe('converter', () => {
		it('should render', () => {
			render(<Converter />, scratch);
			expect(scratch.innerHTML).to.contain('Roman/Arabic and Arabic/Roman numeral converter');
			expect(scratch.innerHTML).to.contain('<h3>No result</h3>');
		});

	});
});
