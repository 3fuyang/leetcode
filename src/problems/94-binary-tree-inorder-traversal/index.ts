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
function inorderTraversal(root: TreeNode | null): number[] {
	const result: number[] = [];
	const st: (TreeNode | null)[] = [];
	let cur: TreeNode | null = root;

	while (cur || st.length) {
		if (cur) {
			st.push(cur);
			cur = cur.left;
		} else {
			cur = st.pop() ?? null;
			if (!cur) {
				continue;
			}
			result.push(cur.val);
			cur = cur.right;
		}
	}

	return result;
}

// recursion
function _inorderTraversal(root: TreeNode | null): number[] {
	const result: number[] = [];

	inorder(root, result);

	return result;

	function inorder(node: TreeNode | null, result: number[]) {
		if (!node) {
			return;
		}

		inorder(node.left, result);
		result.push(node.val);
		inorder(node.right, result);
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
