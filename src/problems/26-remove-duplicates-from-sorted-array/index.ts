function removeDuplicates(nums: number[]): number {
	// remove duplicates in-place
	// non-decreasing order
	// nums.length >= 1
	let slow = 1;
	let fast = 1;

	while (fast < nums.length) {
		if (nums[fast] !== nums[fast - 1]) {
			nums[slow++] = nums[fast];
		}
		fast++;
	}

	return slow;
}
