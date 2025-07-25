function majorityElement(nums: number[]): number {
	// O(n * log(n))
	nums.sort((a, b) => a - b);

	return nums[Math.floor(nums.length / 2)];
}
