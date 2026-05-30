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
