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
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
	while (root) {
		if (root.val > val) {
			root = root.left;
		} else if (root.val < val) {
			root = root.right;
		} else {
			break;
		}
	}
	return root;
}

// recursive
function _searchBST(root: TreeNode | null, val: number): TreeNode | null {
	if (!root) {
		return null;
	}

	if (val === root.val) {
		return root;
	}

	if (val < root.val) {
		// search smaller value in left subtree
		return searchBST(root.left, val);
	}

	// search in right subtree
	return searchBST(root.right, val);
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
