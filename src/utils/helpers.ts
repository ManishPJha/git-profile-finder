export const humanizer = (str: string) => {
	return str
		.replace(/^[\s_]+|[\s_]+$/g, "")
		.replace(/[_\s]+/g, " ")
		.replace(/^[a-z]/, function (m) {
			return m.toUpperCase();
		});
};

export const upperCase = (str: string) => {
	return str.toUpperCase();
};

export const lowerCase = (str: string) => {
	return str.toLowerCase();
};

export const capatalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
