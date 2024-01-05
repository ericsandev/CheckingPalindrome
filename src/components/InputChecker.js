import React, { useState } from 'react';

/**
 * InputChecker Component
 *
 * This component is responsible for rendering an input where the user can enter text. When the text changes, it calls the function provided through props to notify the change.
 *
 * @param {Object} props - The component's properties.
 * @param {Function} props.onInputChange - The function to be executed when the input value changes. Receives the new input value as an argument.
 *
 * @returns {JSX.Element} - Returns a JSX element representing the input.
 */
function InputChecker(props) {
	// State to store the input value
	const [inputValue, setInputValue] = useState('');

	/**
	 * Handles the input change and updates the state.
	 *
	 * @param {Event} event - The input change event.
	 */
	const handleInputChange = (event) => {
		const input = event.target.value;
		setInputValue(input);
		props.onInputChange(input);
	};

	return (
		<input
			className="border-2 border-accent-color rounded-sm py-2 px-4 w-[90%] bg-primary-color text-2xl"
			value={inputValue}
			onChange={handleInputChange}
			placeholder="eg. LEVEL"
		/>
	);
}

export default InputChecker;
