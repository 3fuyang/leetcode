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

function levelOrder(root: TreeNode | null): number[][] {
	const result: number[][] = [];

	if (!root) {
		return result;
	}

	const nodes: TreeNode[][] = [[root]];

	let level = 0;
	while (nodes[level].length) {
		result[level] = [];
		nodes[level + 1] = [];

		for (const node of nodes[level]) {
			result[level].push(node.val);

			if (node.left) {
				nodes[level + 1].push(node.left);
			}
			if (node.right) {
				nodes[level + 1].push(node.right);
			}
		}

		level++;
	}

	return result;
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
