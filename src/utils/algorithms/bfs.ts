export interface BFSStep {
  currentNode: string;

  queue: string[];

  visited: string[];

  traversal: string[];

  action: string;

  codeLine: number;
}
export const sampleGraph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: [],
  F: [],
};
export function bfsTraversal(
  graph: Record<string, string[]>,
  start: string
): BFSStep[] {
  const steps: BFSStep[] = [];

  const queue: string[] = [start];

  const visited = new Set<string>();

  const traversal: string[] = [];

  while (queue.length > 0) {
    const node = queue.shift()!;

    if (visited.has(node)) continue;

    visited.add(node);

    traversal.push(node);

    steps.push({
      currentNode: node,

      queue: [...queue],

      visited: [...visited],

      traversal: [...traversal],

      action: `Visited node ${node}`,

      codeLine: 4,
    });

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);

        steps.push({
          currentNode: node,

          queue: [...queue],

          visited: [...visited],

          traversal: [...traversal],

          action: `Added ${neighbor} to queue`,

          codeLine: 7,
        });
      }
    }
  }

  return steps;
}