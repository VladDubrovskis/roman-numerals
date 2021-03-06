import { h, Component } from 'preact';
import * as converter from '../../lib/converter';
import style from './style';

export default class Converter extends Component {
	state = { convertedNumber: null, number: '' }

	handleSubmit(e) {
		e.preventDefault();
		this.setState({ convertedNumber: converter.convert(this.state.number) });
	}

	componentWillMount() {
		if (this.props.number) {
			this.setState({ number: this.props.number });
			this.setState({ convertedNumber: converter.convert(this.props.number)});
		}
	}

	updateText(e) {
		this.setState({ number: e.target.value });
	}

	render({ }, { number, convertedNumber }) {
		return (
			<div class={style.home}>
				<h1>Number converter</h1>
				<p>Enter a number between 1 and 3999 or a roman number between I and MMMCMXCIX</p>
				<form onSubmit={this.handleSubmit.bind(this)} action="javascript:">
					<input type="text" value={number} onChange={this.updateText.bind(this)} />
					<input type="submit" value="Convert" />
				</form>
				<h2>Result</h2>
				<h3>{convertedNumber || 'No result'}</h3>
			</div>
		);
	}
}
