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

function sumNumbers(root: TreeNode | null): number {
	let result = 0;

	backtrack(root, 0);

	return result;

	function backtrack(node: TreeNode | null, num: number) {
		if (!node) {
			return;
		}

		const sum = num * 10 + node.val;
		if (!node.left && !node.right) {
			// leaf node
			result += num * 10 + node.val;
			return;
		}

		backtrack(node.left, sum);
		backtrack(node.right, sum);
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
