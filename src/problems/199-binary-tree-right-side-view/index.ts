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

function rightSideView(root: TreeNode | null): number[] {
	// bfs and record the last node on each level
	const result: number[] = [];

	if (!root) {
		return result;
	}

	const que: TreeNode[] = [root];

	while (que.length) {
		const size = que.length;
		for (let i = 0; i < size; i++) {
			const node = que.shift() as TreeNode;
			if (i === size - 1) {
				result.push(node.val);
			}
			if (node.left) que.push(node.left);
			if (node.right) que.push(node.right);
		}
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
