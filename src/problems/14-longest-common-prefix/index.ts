// sort lexicographically
function longestCommonPrefix(strs: string[]): string {
	if (strs.length === 1) {
		return strs[0];
	}

	// ascending
	strs.sort();

	let result = "";

	const start = strs[0];
	const end = strs[strs.length - 1];
	for (let i = 0; i < start.length; i++) {
		if (start[i] !== end[i]) {
			break;
		}

		result += start[i];
	}

	return result;
}

// brute force
function _longestCommonPrefix(strs: string[]): string {
	let result = "";

	let isCommon = true;
	while (isCommon) {
		// base char, which is the first non-empty char iterated
		let ch: string | undefined;

		for (const str of strs) {
			if (!str[result.length]) {
				// encountering a str's end
				isCommon = false;
				break;
			}

			if (!ch) {
				// init base char
				ch = str[result.length];
				continue;
			}

			if (ch !== str[result.length]) {
				// not matched
				isCommon = false;
				break;
			}
		}

		if (isCommon) {
			// matched
			result += ch;
		}
	}

	return result;
}
