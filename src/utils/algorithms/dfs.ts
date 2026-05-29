export interface DFSStep {
  currentNode: string;

  stack: string[];

  visited: string[];

  traversal: string[];

  action: string;

  codeLine: number;
}

export function dfsTraversal(
  graph: Record<string, string[]>,
  start: string
): DFSStep[] {

  const steps: DFSStep[] = [];

  const stack: string[] = [start];

  const visited = new Set<string>();

  const traversal: string[] = [];

  while (stack.length > 0) {

    const node = stack.pop()!;

    if (visited.has(node)) continue;

    visited.add(node);

    traversal.push(node);

    steps.push({
      currentNode: node,

      stack: [...stack],

      visited: [...visited],

      traversal: [...traversal],

      action: `Visited node ${node}`,

      codeLine: 5,
    });

    const neighbors =
      [...graph[node]].reverse();

    for (const neighbor of neighbors) {

      if (!visited.has(neighbor)) {

        stack.push(neighbor);

        steps.push({
          currentNode: node,

          stack: [...stack],

          visited: [...visited],

          traversal: [...traversal],

          action: `Pushed ${neighbor} onto stack`,

          codeLine: 8,
        });
      }
    }
  }

  return steps;
}