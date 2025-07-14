function restoreIpAddresses(s: string): string[] {
	const result: string[] = [];

	const candidate: string[] = [];

	backtracking(0, result, candidate);

	return result;

	function backtracking(start: number, result: string[], candidate: string[]) {
		if (candidate.length === 4 && start === s.length) {
			// adopt
			result.push(candidate.join("."));
			return;
		}
		if (start >= s.length) {
			return;
		}

		for (let len = 1; len <= 3; len++) {
			const end = start + len - 1;
			if (end >= s.length) {
				break;
			}
			// leading zero
			if (len > 1 && s[start] === "0") {
				break;
			}
			const seg = s.substring(start, end + 1);
			// exceeds upper limit
			if (Number(seg) > 255) {
				break;
			}

			candidate.push(seg);
			backtracking(end + 1, result, candidate);
			candidate.pop();
		}
	}
}
