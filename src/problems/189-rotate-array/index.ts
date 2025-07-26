/**
 Do not return anything, modify nums in-place instead.
 */
// reverse the array first and reverse both the left and right parts, O(1) space
function rotate(nums: number[], k: number): void {
	nums.reverse();
	const ek = k % nums.length;
	// reverse left and right parts
	reverseSlice(nums, 0, ek - 1);
	reverseSlice(nums, ek, nums.length - 1);

	function reverseSlice(nums: number[], start: number, end: number) {
		const mid = Math.floor((start + end) / 2);
		for (let i = start; i <= mid; i++) {
			[nums[i], nums[end - (i - start)]] = [nums[end - (i - start)], nums[i]];
		}
	}
}

// split and merge, O(n)
function _rotate(nums: number[], k: number): void {
	// semantically equal `k`
	const ek = k % nums.length;
	// store the right slice
	const right = nums.slice(nums.length - ek);
	// truncate
	nums.length = nums.length - ek;
	// merge
	nums.unshift(...right);
}

// brute force, O(n^2)
function __rotate(nums: number[], k: number): void {
	for (let i = 0; i < k; i++) {
		const n = nums.pop();
		if (typeof n !== "number") break;
		nums.unshift(n);
	}
}
