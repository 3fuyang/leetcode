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

// O(n)
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
	if (!inorder.length) return null;

	const inorderIndexes: Map<number, number> = new Map();
	for (let i = 0; i < inorder.length; i++) {
		inorderIndexes.set(inorder[i], i);
	}

	return build(0, inorder.length - 1);

	function build(left: number, right: number): TreeNode | null {
		if (left > right) return null;
		const root = new TreeNode(postorder.pop() as number);
		const rootIndex = inorderIndexes.get(root.val) as number;
		root.right = build(rootIndex + 1, right);
		root.left = build(left, rootIndex - 1);
		return root;
	}
}

// O(n^2)
function _buildTree(inorder: number[], postorder: number[]): TreeNode | null {
	if (!inorder.length) return null;

	// last element in postorder output is the root
	const root = new TreeNode(postorder.pop() as number);
	const rootIndexInorder = inorder.findIndex(
		(val) => val === root.val,
	) as number;
	root.right = _buildTree(inorder.slice(rootIndexInorder + 1), postorder);
	root.left = _buildTree(inorder.slice(0, rootIndexInorder), postorder);

	return root;
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
