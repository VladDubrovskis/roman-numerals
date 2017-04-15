import render from 'preact-render-to-string';
import { h } from 'preact';
import { route } from 'preact-router';
import App from 'components/app';
import Converter from 'components/converter';
import 'style';

/*global sinon,expect*/

describe('App', () => {

	it('should render the homepage', () => {
		const output = render(<App />);
		expect(output).to.contain('Home');
	});

	describe('converter', () => {
		it('should render without problems ', () => {
			const output = render(<Converter />);
			expect(output).to.contain('Roman/Arabic and Arabic/Roman numeral converter');
			expect(output).to.contain('<h3>No result</h3>');
		});

		it('should convert the arabic numerals to roman', () => {
			const output = render(<Converter number="123" />);
			expect(output).to.contain('Roman/Arabic and Arabic/Roman numeral converter');
			expect(output).to.contain('<h3>CXXIII</h3>');
		});

		it('should convert the roman numerals to arabic', () => {
			const output = render(<Converter number="CXXIII" />);
			expect(output).to.contain('Roman/Arabic and Arabic/Roman numeral converter');
			expect(output).to.contain('<h3>123</h3>');
		});

	});
});
