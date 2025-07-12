function findKthLargest(nums: number[], k: number): number {
	const maxHeap = new MaxHeap(nums);

	let num = NaN;
	for (let i = 0; i < k; i++) {
		num = maxHeap.pop() as number;
	}

	return num;
}

class MaxHeap {
	#heap: number[] = [];

	constructor(nums: number[]) {
		for (const num of nums) {
			// construct the max heap
			this.push(num);
		}
	}

	push(num: number) {
		// sift up
		this.#heap.push(num);
		let index = this.#heap.length - 1;

		while (index) {
			const parentIndex = Math.floor((index - 1) / 2);
			if (this.#heap[index] > this.#heap[parentIndex]) {
				[this.#heap[parentIndex], this.#heap[index]] = [
					this.#heap[index],
					this.#heap[parentIndex],
				];
				index = parentIndex;
			} else {
				break;
			}
		}
	}

	peek() {
		return this.#heap[0];
	}

	pop() {
		if (this.#heap.length === 0) return undefined;
		const root = this.#heap[0];
		const last = this.#heap.pop();
		if (typeof last === "number") {
			this.#heap[0] = last;
		}
		let index = 0;
		while (index < this.#heap.length) {
			const leftChildIndex = 2 * index + 1;
			const rightChildIndex = leftChildIndex + 1;

			let largestIndex = index;

			if (
				leftChildIndex < this.#heap.length &&
				this.#heap[leftChildIndex] > this.#heap[largestIndex]
			) {
				largestIndex = leftChildIndex;
			}
			if (
				rightChildIndex < this.#heap.length &&
				this.#heap[rightChildIndex] > this.#heap[largestIndex]
			) {
				largestIndex = rightChildIndex;
			}
			// heapified
			if (largestIndex === index) {
				break;
			}
			// swap
			[this.#heap[index], this.#heap[largestIndex]] = [
				this.#heap[largestIndex],
				this.#heap[index],
			];
			index = largestIndex;
		}

		return root;
	}
}
