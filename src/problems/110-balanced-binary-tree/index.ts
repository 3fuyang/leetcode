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

function isBalanced(root: TreeNode | null): boolean {
	return dfsHeight(root) !== -1;
}

function dfsHeight(root: TreeNode | null): number {
	if (!root) return 0;

	const leftHeight = dfsHeight(root.left);
	if (leftHeight === -1) return -1;
	const rightHeight = dfsHeight(root.right);
	if (rightHeight === -1) return -1;

	if (Math.abs(leftHeight - rightHeight) > 1) return -1;
	return 1 + Math.max(leftHeight, rightHeight);
}

// recursion with dfs
function __isBalanced(root: TreeNode | null): boolean {
	if (!root) {
		return true;
	}

	const left = depth(root.left);
	const right = depth(root.right);

	return (
		Math.abs(left - right) <= 1 &&
		__isBalanced(root.left) &&
		__isBalanced(root.right)
	);
}

function depth(root: TreeNode | null): number {
	if (!root) return 0;
	return 1 + Math.max(depth(root.left), depth(root.right));
}

// dumb solution
function _isBalanced(root: TreeNode | null): boolean {
	if (!root) {
		return true;
	}

	const leftHeight = getHeight(root.left);
	const rightHeight = getHeight(root.right);

	if (Math.abs(leftHeight - rightHeight) > 1) {
		return false;
	}

	return __isBalanced(root.left) && __isBalanced(root.right);
}

function getHeight(node: TreeNode | null) {
	// bfs
	let height = 0;
	if (!node) {
		return height;
	}

	const que: TreeNode[] = [node];
	while (que.length) {
		height++;
		const size = que.length;
		for (let i = 0; i < size; i++) {
			const node = que.shift() as TreeNode;
			if (node.left) {
				que.push(node.left);
			}
			if (node.right) {
				que.push(node.right);
			}
		}
	}

	return height;
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
