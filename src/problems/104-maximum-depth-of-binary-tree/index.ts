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

// level first traversal
function maxDepth(root: TreeNode | null): number {
	if (!root) {
		return 0;
	}

	let depth = 0;
	const queue: TreeNode[] = [root];

	while (queue.length) {
		depth++;
		const size = queue.length;
		for (let i = 0; i < size; i++) {
			const node = queue.shift() as TreeNode;
			if (node.left) {
				queue.push(node.left);
			}
			if (node.right) {
				queue.push(node.right);
			}
		}
	}

	return depth;
}

// recursion
function _maxDepth(root: TreeNode | null): number {
	let result = 0;
	let cur = 0;

	traverse(root);

	return result;

	function traverse(node: TreeNode | null) {
		if (!node) {
			result = Math.max(result, cur);
			return;
		}

		cur++;
		traverse(node.left);
		traverse(node.right);
		cur--;
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
