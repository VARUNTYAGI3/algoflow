export interface BinarySearchStep {

  left: number;

  right: number;

  mid: number;

  target: number;

  found: boolean;

  currentValue: number;

  action: string;

  codeLine: number;
}

export function binarySearchSteps(

  nums: number[],

  target: number

): BinarySearchStep[] {

  const steps: BinarySearchStep[] =
    [];

  let left = 0;

  let right = nums.length - 1;

  while (left <= right) {

    const mid = Math.floor(
      (left + right) / 2
    );

    steps.push({
      left,

      right,

      mid,

      target,

      found: nums[mid] === target,

      currentValue: nums[mid],

      action:
        nums[mid] === target
          ? `Found target ${target} at index ${mid}`
          : `Checking middle element ${nums[mid]}`,

      codeLine: 4,
    });

    if (nums[mid] === target) {

      break;

    } else if (
      nums[mid] < target
    ) {

      left = mid + 1;

      steps.push({
        left,

        right,

        mid,

        target,

        found: false,

        currentValue: nums[mid],

        action:
          "Target is larger, moving left pointer",

        codeLine: 7,
      });

    } else {

      right = mid - 1;

      steps.push({
        left,

        right,

        mid,

        target,

        found: false,

        currentValue: nums[mid],

        action:
          "Target is smaller, moving right pointer",

        codeLine: 9,
      });
    }
  }

  return steps;
}