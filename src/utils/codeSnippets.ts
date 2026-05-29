export const codeSnippets = {

  "sliding-window": [
    "let left = 0, sum = 0;",

    "for (let right = 0; right < nums.length; right++) {",

    "sum += nums[right];",

    "while (sum >= target) {",

    "sum -= nums[left];",

    "left++;",

    "}",

    "}",
  ],

  bfs: [
    "const queue = [start];",

    "const visited = new Set();",

    "while (queue.length > 0) {",

    "const node = queue.shift();",

    "if (visited.has(node)) continue;",

    "visited.add(node);",

    "for (const neighbor of graph[node]) {",

    "queue.push(neighbor);",

    "}",

    "}",
  ],

  dfs: [
    "const stack = [start];",

    "const visited = new Set();",

    "while (stack.length > 0) {",

    "const node = stack.pop();",

    "if (visited.has(node)) continue;",

    "visited.add(node);",

    "for (const neighbor of graph[node]) {",

    "stack.push(neighbor);",

    "}",

    "}",
  ],
};