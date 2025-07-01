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

// reuse one of the trees
function mergeTrees(
	root1: TreeNode | null,
	root2: TreeNode | null,
): TreeNode | null {
	if (!root1) {
		return root2;
	}
	if (!root2) {
		return root1;
	}

	root1.val += root2.val;
	root1.left = mergeTrees(root1.left, root2.left);
	root1.right = mergeTrees(root1.right, root2.right);

	return root1;
}

function _mergeTrees(
	root1: TreeNode | null,
	root2: TreeNode | null,
): TreeNode | null {
	return traverse(root1, root2);

	function traverse(
		root1: TreeNode | null,
		root2: TreeNode | null,
	): TreeNode | null {
		if (!root1 && !root2) {
			return null;
		}

		const root = new TreeNode((root1?.val ?? 0) + (root2?.val ?? 0));

		if (!root1?.left || !root2?.left) {
			// adopt the non-empty subtree
			root.left = (root1?.left || root2?.left) ?? null;
		} else {
			root.left = traverse(root1.left, root2.left);
		}
		if (!root1?.right || !root2?.right) {
			// adopt the non-empty subtree
			root.right = (root1?.right || root2?.right) ?? null;
		} else {
			root.right = traverse(root1.right, root2.right);
		}

		return root;
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
