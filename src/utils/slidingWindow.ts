export type Step = {
  left: number;
  right: number;
  sum: number;
  action: string;
  codeLine: number;
  operations: number;
};

export function slidingWindow(nums: number[], target: number): Step[] {
  const steps: Step[] = [];

  let left = 0;
  let sum = 0;
  let operations = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    operations++;

    steps.push({
      left,
      right,
      sum,
      action: `Added ${nums[right]} to window`,
      codeLine: 3, // sum += nums[right]
      operations
    });

    while (sum >= target) {
      steps.push({
        left,
        right,
        sum,
        action: "Window >= target, shrinking",
        codeLine: 5, // while condition
        operations
      });

      sum -= nums[left];

      steps.push({
        left,
        right,
        sum,
        action: "Removed left value from sum",
        codeLine: 6,
        operations
      });

      left++;

      steps.push({
        left,
        right,
        sum,
        action: "Moved left pointer",
        codeLine: 7,
        operations
      });
    }
  }

  return steps;
}
