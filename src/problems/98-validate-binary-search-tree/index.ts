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

// iterative
function isValidBST(root: TreeNode | null): boolean {
	const st: TreeNode[] = [];
	let cur = root;

	let prev = Number.NEGATIVE_INFINITY;

	while (cur || st.length) {
		if (cur) {
			st.push(cur);
			cur = cur.left;
		} else {
			const node = st.pop() as TreeNode;
			if (node.val <= prev) {
				return false;
			}
			prev = node.val;
			cur = node.right;
		}
	}

	return true;
}

// recursive
function _isValidBST(root: TreeNode | null): boolean {
	// The inorder traversal of a BST is a
	// sorted sequence in ascending order
	let prev = Number.NEGATIVE_INFINITY;

	let result = true;

	inorderTraversal(root);

	function inorderTraversal(node: TreeNode | null) {
		if (!node || !result) {
			return;
		}

		inorderTraversal(node.left);
		if (node.val <= prev) {
			result = false;
		}
		prev = node.val;
		inorderTraversal(node.right);
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
