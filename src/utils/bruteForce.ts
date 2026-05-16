export type BruteStep = {
  start: number;
  end: number;
  sum: number;
  action: string;
  operations: number;
};

export function bruteForce(nums: number[], target: number): BruteStep[] {
  const steps: BruteStep[] = [];
 
  for (let start = 0; start < nums.length; start++) {
    let sum = 0;
    let operations = 0;

    for (let end = start; end < nums.length; end++) {
      sum += nums[end];

      steps.push({
        start,
        end,
        sum,
        action: `Checking subarray ${start} → ${end}`,
        operations
      });

      if (sum >= target) {
        steps.push({
          start,
          end,
          sum,
          action: "Target reached",
          operations
        });

        break;
      }
    }
  }

  return steps;
}