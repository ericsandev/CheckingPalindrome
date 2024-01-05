import React, { useState, useEffect } from 'react';
import InputChecker from '../components/InputChecker';
import { isPalindrome } from '../utils/isPalindrome';

/**
 * Main Component: Home
 *
 * This component represents the main page of the application. It allows users to input text and checks if it is a palindrome.
 */
const Home = () => {
	const [inputValue, setInputValue] = useState('');
	const [isPalindromeValue, setIsPalindromeValue] = useState(false);

	/**
	 * Handles the input change and updates the inputValue state.
	 *
	 * @param {string} input - The input value.
	 */
	const handleInputChange = (input) => {
		setInputValue(input);
	};

	useEffect(() => {
		setIsPalindromeValue(isPalindrome(inputValue));
	}, [inputValue]);

	return (
		<div className="bg-primary-color h-screen flex flex-col justify-center items-center text-accent-color">
			<div className="flex flex-col max-w-lg rounded-sm border-2 border-accent-color justify-center items-center text-center w-[90%] h-[300px]">
				<h1 className="text-2xl mb-2">Is it a palindrome?</h1>
				<InputChecker onInputChange={handleInputChange} />
				{inputValue !== '' ? (
					isPalindromeValue ? (
						<p className="text-lg p-4 uppercase text-accent-color">
							¡It's a palindrome!
						</p>
					) : (
						<p className="text-lg p-4 uppercase text-white">
							It is not a palindrome.
						</p>
					)
				) : (
					<p className="text-lg p-4 uppercase text-white">
						- - - - - -
					</p>
				)}
			</div>

			<p className="text-base mt-4 text-gray-200 flex justify-center items-center">
				<ion-icon name="information-circle-outline"></ion-icon> What is
				a palindrome?
			</p>
			<p className="text-sm text-gray-200 w-3/5 text-center">
				A palindrome is a word, backwards as forwards, such as madam or
				racecar, the date and time 12/21/33 12:21, and the sentence: "A
				man, a plan, a canal – Panama".
			</p>
		</div>
	);
};

export default Home;
