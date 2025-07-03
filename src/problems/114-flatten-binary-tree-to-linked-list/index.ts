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

/**
 Do not return anything, modify root in-place instead.
 */

// postorder
function flatten(root: TreeNode | null): void {
	let prev: TreeNode | null = null;

	postorder(root);

	function postorder(node: TreeNode | null) {
		if (!node) {
			return;
		}

    // right, left, mid
		postorder(node.right);
		postorder(node.left);
		node.right = prev;
		node.left = null;
		prev = node;
	}
}

// preorder iterative
function __flatten(root: TreeNode | null): void {
	let prev: TreeNode | null = null;

	if (!root) {
		return;
	}

	const st: TreeNode[] = [root];

	while (st.length) {
		const node = st.pop() as TreeNode;
		const left = node.left;
		const right = node.right;

		if (prev) {
			prev.right = node;
		}
		prev = node;
		node.left = null;
		right && st.push(right);
		left && st.push(left);
	}
}

// preorder recursive
function _flatten(root: TreeNode | null): void {
	// the `right` child pointer points to the next node
	// and the `left` child pointer is always `null`
	// Solution: Preorder traversal
	// Crux: Modify root in-place
	let prev: TreeNode | null = null;

	preorder(root);

	function preorder(node: TreeNode | null) {
		if (!node) {
			return;
		}
		// store child nodes temporally
		const left = node.left;
		const right = node.right;
		node.left = null;

		if (prev) {
			prev.right = node;
		}
		prev = node;
		preorder(left);
		preorder(right);
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
