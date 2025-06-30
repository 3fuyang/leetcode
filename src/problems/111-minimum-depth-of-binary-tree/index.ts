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

// bfs
function minDepth(root: TreeNode | null): number {
	if (!root) {
		return 0;
	}
	const que: TreeNode[] = [root];

	let depth = 0;
	while (que.length) {
		depth++;
		const size = que.length;
		for (let i = 0; i < size; i++) {
			const node = que.shift() as TreeNode;
			if (node.left) {
				que.push(node.left);
			}
			if (node.right) {
				que.push(node.right);
			}
      // first leaf node encountered in bfs is the answer
			if (!node.left && !node.right) {
				return depth;
			}
		}
	}

	// not reachable
	return -1;
}

// recursion
function __minDepth(root: TreeNode | null): number {
	return getDepth(root);

	function getDepth(node: TreeNode | null): number {
		if (!node) return 0;
		const leftDepth = getDepth(node.left);
		const rightDepth = getDepth(node.right);

		if (!node.left && node.right) {
			return 1 + rightDepth;
		}
		if (node.left && !node.right) {
			return 1 + leftDepth;
		}
		const result = 1 + Math.min(leftDepth, rightDepth);
		return result;
	}
}

// recursion
function _minDepth(root: TreeNode | null): number {
	if (!root) {
		return 0;
	}
	let result = Number.POSITIVE_INFINITY;

	let curDepth = 0;
	function traverse(node: TreeNode | null) {
		if (!node) {
			return;
		}
		curDepth++;
		if (!node.left && !node.right) {
			result = Math.min(result, curDepth);
			curDepth--;
			return;
		}
		traverse(node.left);
		traverse(node.right);
		curDepth--;
	}

	traverse(root);

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
