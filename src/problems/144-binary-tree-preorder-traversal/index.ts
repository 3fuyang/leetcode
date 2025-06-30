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

// iteration
export function preorderTraversal(root: TreeNode | null): number[] {
	const result: number[] = [];

	const st: (TreeNode | null)[] = [root];

	while (st.length) {
		const node = st.pop();
		if (!node) {
			continue;
		}
		result.push(node.val);
		if (node.right) {
			st.push(node.right);
		}
		if (node.left) {
			st.push(node.left);
		}
	}

	return result;
}

// recursion
function _preorderTraversal(root: TreeNode | null): number[] {
	const result: number[] = [];

	preorder(root, result);

	function preorder(node: TreeNode | null, result: number[]) {
		if (!node) {
			return;
		}

		result.push(node.val);
		preorder(node.left, result);
		preorder(node.right, result);
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
