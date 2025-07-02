/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// Space complexity: O(1)
function findMode(root: TreeNode | null): number[] {
	const result: number[] = [];
	let prev: TreeNode | null = null;

	let count = 0;
	let maxCount = 0;

	inorderTraversal(root);

	return result;

	function inorderTraversal(node: TreeNode | null) {
		if (!node) {
			return;
		}

		node.left && inorderTraversal(node.left);
		if (!prev) {
			count = 1;
		} else if (prev.val === node.val) {
			count++;
		} else {
			count = 1;
		}
		if (count > maxCount) {
			maxCount = count;
			result.length = 0;
			result.push(node.val);
		} else if (maxCount === count) {
			result.push(node.val);
		}
		prev = node;
		node.right && inorderTraversal(node.right);
	}
}

// Space complexity: O(n)
function _findMode(root: TreeNode | null): number[] {
	const result: number[] = [];
	const hashMap: Map<number, number> = new Map();

	if (!root) {
		return result;
	}

	let modeCount = 0;

	preorder(root);

	for (const [val, count] of hashMap) {
		if (count === modeCount) {
			result.push(val);
		}
	}

	return result;

	function preorder(node: TreeNode | null) {
		if (!node) {
			return;
		}

		const nextCount = (hashMap.get(node.val) ?? 0) + 1;
		hashMap.set(node.val, nextCount);
		modeCount = Math.max(modeCount, nextCount);
		preorder(node.left);
		preorder(node.right);
	}
}

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
