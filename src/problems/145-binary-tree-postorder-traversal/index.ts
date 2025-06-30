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
function postorderTraversal(root: TreeNode | null): number[] {
	const result: number[] = [];

	if (!root) {
		return result;
	}

	const st: TreeNode[] = [root];

	while (st.length) {
		const node = st.pop() as TreeNode;
		result.push(node.val);
		if (node.left) {
			st.push(node.left);
		}
		if (node.right) {
			st.push(node.right);
		}
	}

	return result.reverse();
}

// recursion
function _postorderTraversal(root: TreeNode | null): number[] {
	const result: number[] = [];

	postorder(root, result);

	return result;

	function postorder(root: TreeNode | null, result: number[]) {
		if (!root) {
			return;
		}

		postorder(root.left, result);
		postorder(root.right, result);
		result.push(root.val);
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
