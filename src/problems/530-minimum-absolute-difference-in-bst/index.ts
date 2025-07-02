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

function getMinimumDifference(root: TreeNode | null): number {
	let result = Number.POSITIVE_INFINITY;
	let prev: number | undefined;

	inorderTraversal(root);

	return result;

	function inorderTraversal(node: TreeNode | null) {
		if (!node) return;
		inorderTraversal(node.left);
		if (typeof prev === "number") {
			result = Math.min(result, node.val - prev);
		}
		prev = node.val;
		inorderTraversal(node.right);
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
