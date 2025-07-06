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

function diameterOfBinaryTree(root: TreeNode | null): number {
	if (!root) {
		return 0;
	}

	let max = 0;

	maxDepth(root);

	return max;

	function maxDepth(node: TreeNode | null): number {
		if (!node) return 0;

		const left = maxDepth(node.left);
		const right = maxDepth(node.right);

		// Crux: diameter for root is the max depth of its left subtree
		// plus that of its right subtree
		max = Math.max(max, left + right);

		return Math.max(left, right) + 1;
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
