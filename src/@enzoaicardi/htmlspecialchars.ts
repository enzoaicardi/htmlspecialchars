/** @internal */
const htmlRegex = /[&<>"'`]/g;

/** @internal */
const htmlDictionary = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
    "`": "&#96;",
};

/** @internal */
const match = (match: string): string => htmlDictionary[match];

/**
 * function used to escape HTML special characters
 * @param {string} string the string to be sanitized
 * @returns {string} the sanitized string
 */
const htmlSpecialChars = (string: string): string => {
    return string.replace(htmlRegex, match);
};

export { htmlSpecialChars };
