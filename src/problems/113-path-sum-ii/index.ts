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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
	const result: number[][] = [];
	if (!root) {
		return result;
	}

	backtracking(root, [], targetSum);

	return result;

	/**
	 * @param node Current node
	 * @param path Candidate
	 * @param sum Target sum
	 */
	function backtracking(node: TreeNode | null, path: number[], sum: number) {
		if (!node) {
			return;
		}

		path.push(node.val);
		if (!node.left && !node.right) {
			// leaf node
			if (sum === node.val) {
				result.push([...path]);
			}
		}
		node.left && backtracking(node.left, path, sum - node.val);
		node.right && backtracking(node.right, path, sum - node.val);
		path.pop();
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
