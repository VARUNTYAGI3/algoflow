export interface MergeSortStep {
  array: number[];
  left: number;
  right: number;
  action: string;
  codeLine: number;
}

export function mergeSortSteps(
  nums: number[]
): MergeSortStep[] {

  const steps: MergeSortStep[] = [];

  const arr = [...nums];

  function mergeSort(
    left: number,
    right: number
  ) {

    if (left >= right) return;

    const mid =
      Math.floor((left + right) / 2);

    steps.push({
      array: [...arr],
      left,
      right,
      action:
        `Split range [${left}, ${right}]`,
      codeLine: 2,
    });

    mergeSort(left, mid);

    mergeSort(mid + 1, right);

    merge(left, mid, right);
  }

  function merge(
    left: number,
    mid: number,
    right: number
  ) {

    const temp: number[] = [];

    let i = left;
    let j = mid + 1;

    while (
      i <= mid &&
      j <= right
    ) {

      if (arr[i] <= arr[j]) {
        temp.push(arr[i++]);
      } else {
        temp.push(arr[j++]);
      }
    }

    while (i <= mid)
      temp.push(arr[i++]);

    while (j <= right)
      temp.push(arr[j++]);

    for (
      let k = left;
      k <= right;
      k++
    ) {

      arr[k] =
        temp[k - left];
    }

    steps.push({
      array: [...arr],
      left,
      right,
      action:
        `Merged range [${left}, ${right}]`,
      codeLine: 8,
    });
  }

  mergeSort(
    0,
    arr.length - 1
  );

  return steps;
}