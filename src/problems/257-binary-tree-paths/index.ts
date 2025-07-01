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

function binaryTreePaths(root: TreeNode | null): string[] {
	const result: string[] = [];

	let candidate = "";
	preorder(root, candidate);

	return result;

	function preorder(node: TreeNode | null, candidate: string) {
		if (!node) {
			// base case
			return;
		}
		let postfixLen = String(node.val).length;
		candidate += node.val;
		if (!node?.left && !node?.right) {
			// leaf node
			result.push(candidate);
		}
		preorder(node.left, candidate + "->");
		preorder(node.right, candidate + "->");
		candidate = candidate.substring(0, candidate.length - postfixLen);
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
