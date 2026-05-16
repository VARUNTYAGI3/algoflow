import { Step } from "./slidingWindow";

export function generateExplanation(
  current: Step,
  previous?: Step,
  target?: number
) {
  if (!previous) {
    return "Simulation initialized. Starting traversal from the beginning of the array.";
  }

  // RIGHT POINTER MOVED
  if (current.right > previous.right) {
    return `The right pointer expanded the window because the current sum (${previous.sum}) was below the target (${target}).`;
  }

  // LEFT POINTER MOVED
  if (current.left > previous.left) {
    return `The left pointer shrank the window to reduce the current sum after meeting or exceeding the target.`;
  }

  // TARGET REACHED
  if (current.sum >= (target || 0)) {
    return `The current window satisfies the target condition because the sum reached ${current.sum}.`;
  }

  return "The algorithm is evaluating the current sliding window state.";
}