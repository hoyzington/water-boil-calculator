const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

const TemperatureInput = props => {
	const { temperature, scale, onChange } = props;
	return (
		<fieldset>
			<legend>
				Enter temperature in {scaleNames[scale]}:
			</legend>
			<input
				value={temperature}
				onChange={(e) => onChange(e.target.value, scale)}
			/>
		</fieldset>
	);
}

export default TemperatureInput;
