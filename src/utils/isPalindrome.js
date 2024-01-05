/**
 * Palindrome Check Function
 *
 * This function takes a text string as input and checks if it is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward.
 *
 * @param {string} str - The text string to be checked as a palindrome.
 * @returns {boolean} - Returns `true` if the string is a palindrome, otherwise, returns `false`.
 */
export const isPalindrome = (str) => {
	// Clean the string by removing non-alphanumeric characters and converting it to lowercase
	const cleanedStr = str
		.toLowerCase()
		.normalize('NFD')
		.replace(/[^a-zA-Z0-9]/g, '');

	// Reverse the string
	const reversedStr = Array.from(cleanedStr).reverse().join('');

	// Check if the original and reversed strings are equal
	return cleanedStr === reversedStr;
};
