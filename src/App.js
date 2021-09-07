import React from 'react';
import TemperatureInput from './components/TemperatureInput';
import BoilingVerdict from './components/BoilingVerdict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.convertTemperature = this.convertTemperature.bind(this);
    this.tryConvert = this.tryConvert.bind(this);
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

	convertTemperature() {
		const {temperature, scale} = this.state;
		if (scale === 'f') {
			return (temperature - 32) * 5 / 9;
		}
		return (temperature * 9 / 5) + 32;
	}

	tryConvert() {
		const {temperature, scale} = this.state;
		const input = parseFloat(temperature);
		if (temperature.length === 0) {
			return ''
		}
		if (Number.isNaN(input)) {
			return 'Invalid Input';
		}
		const output = this.convertTemperature(input, scale);
		const rounded = Math.round(output * 1000) / 1000;
		return rounded.toString();
	}

	handleTemperatureChange(temperature, scale) {
		this.setState({temperature, scale});
	}

  render() {
    const { temperature, scale } = this.state;
		const celsius = scale === 'f' ? this.tryConvert() : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert() : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onChange={this.handleTemperatureChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onChange={this.handleTemperatureChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default App;
