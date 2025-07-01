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
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	const inorderMap: Map<number, number> = new Map();

	for (let i = 0; i < inorder.length; i++) {
		inorderMap.set(inorder[i], i);
	}

	let rootIndex = 0;

	return build(0, preorder.length - 1);

	function build(left: number, right: number): TreeNode | null {
		if (left > right) return null;
		const rootVal = preorder[rootIndex++];
		const root = new TreeNode(rootVal);
		const index = inorderMap.get(rootVal) as number;
		root.left = build(left, index - 1);
		root.right = build(index + 1, right);
		return root;
	}
}

// O(n^2)
function _buildTree(preorder: number[], inorder: number[]): TreeNode | null {
	if (!preorder.length) {
		return null;
	}

	const rootVal = preorder.shift() as number;
	const root = new TreeNode(rootVal);
  // causes O(n^2)
	const rootIndexInorder = inorder.findIndex(
		(val) => val === rootVal,
	) as number;
	const leftTreeInorder = inorder.slice(0, rootIndexInorder);
	const rightTreeInorder = inorder.slice(rootIndexInorder + 1);
	root.left = buildTree(
		preorder.slice(0, leftTreeInorder.length),
		leftTreeInorder,
	);
	root.right = buildTree(
		preorder.slice(leftTreeInorder.length),
		rightTreeInorder,
	);

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
