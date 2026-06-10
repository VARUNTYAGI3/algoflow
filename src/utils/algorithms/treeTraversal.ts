export interface TreeNode {
  value: number;
  left?: TreeNode;
  right?: TreeNode;
}

export interface TreeStep {
  current: number;
  visited: number[];
  action: string;
  codeLine: number;
}

export const sampleTree: TreeNode = {
  value: 1,

  left: {
    value: 2,

    left: {
      value: 4,
    },

    right: {
      value: 5,
    },
  },

  right: {
    value: 3,

    left: {
      value: 6,
    },

    right: {
      value: 7,
    },
  },
};

export function inorderTraversal(root: TreeNode): TreeStep[] {
  const steps: TreeStep[] = [];

  const visited: number[] = [];

  function dfs(node?: TreeNode) {
    if (!node) return;

    dfs(node.left);

    visited.push(node.value);

    steps.push({
      current: node.value,
      visited: [...visited],
      action: `Visit ${node.value}`,
      codeLine: 4,
    });

    dfs(node.right);
  }

  dfs(root);

  return steps;
}
export function preorderTraversal(
  root: TreeNode
): TreeStep[] {

  const steps: TreeStep[] = [];
  const visited: number[] = [];

  function dfs(
    node?: TreeNode
  ) {

    if (!node) return;

    visited.push(node.value);

    steps.push({
      current: node.value,
      visited: [...visited],
      action: `Visit ${node.value}`,
      codeLine: 2,
    });

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return steps;
}
export function postorderTraversal(
  root: TreeNode
): TreeStep[] {

  const steps: TreeStep[] = [];
  const visited: number[] = [];

  function dfs(
    node?: TreeNode
  ) {

    if (!node) return;

    dfs(node.left);
    dfs(node.right);

    visited.push(node.value);

    steps.push({
      current: node.value,
      visited: [...visited],
      action: `Visit ${node.value}`,
      codeLine: 4,
    });
  }

  dfs(root);

  return steps;
}
export function levelOrderTraversal(
  root: TreeNode
): TreeStep[] {

  const steps: TreeStep[] = [];
  const visited: number[] = [];

  const queue = [root];

  while (queue.length) {

    const node = queue.shift();

    if (!node) continue;

    visited.push(node.value);

    steps.push({
      current: node.value,
      visited: [...visited],
      action: `Visit ${node.value}`,
      codeLine: 3,
    });

    if (node.left)
      queue.push(node.left);

    if (node.right)
      queue.push(node.right);
  }

  return steps;
}