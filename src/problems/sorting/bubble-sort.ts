function bubbleSort(arr: number[]): number[] {
	const res = [...arr];

	let swapped = false;

	for (let i = 0; i < res.length; i++) {
		swapped = false;
		// the last `i` elements have been sorted
		for (let j = 0; j < res.length - 1 - i; j++) {
			if (res[j] > res[j + 1]) {
				[res[j], res[j + 1]] = [res[j + 1], res[j]];
				swapped = true;
			}
		}
		if (!swapped) break;
	}

	return res;
}

const arr = [1, 3, 2, 4, 5, 6, 7, 8];

bubbleSort(arr);

console.log(arr);
