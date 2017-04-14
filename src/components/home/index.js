import { h, Component } from 'preact';
import * as converter from '../../lib/converter';
import style from './style';


export default class Home extends Component {
	state = { convertedNumber: null, text: '' }

	handleSubmit(e) {
		e.preventDefault();
		const convertedNumber = converter.toRoman(this.state.text) || converter.toArabic(this.state.text);
		this.setState({ convertedNumber });
	}

	updateText(e) {
		this.setState({ text: e.target.value });
	}

	render({ }, { text, convertedNumber }) {
		return (
			<div class={style.home}>
				<h1>Roman/Arabic and Arabic/Roman numeral converter</h1>
				<p>Enter a number between 1 and 3999 or a roman number between I and MMMCMXCIX</p>
				<form onSubmit={this.handleSubmit.bind(this)} action="javascript:">
					<input value={text} onInput={this.updateText.bind(this)} />
					<input type="submit" value="Convert" />
				</form>
				<h2>Result</h2>
				<h3>{convertedNumber || 'No result'}</h3>
			</div>
		);
	}
}
