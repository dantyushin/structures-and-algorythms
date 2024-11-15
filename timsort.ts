const MIN_RUN = 32;

const insertionSort = <T>(arr: T[], left: number, right: number): void => {
  for (let i = left + 1; i <= right; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= left && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
};

const merge = <T>(arr: T[], left: number, mid: number, right: number): void => {
  const leftLen = mid - left + 1;
  const rightLen = right - mid;

  const leftArr = new Array<T>(leftLen);
  const rightArr = new Array<T>(rightLen);

  for (let i = 0; i < leftLen; i++) leftArr[i] = arr[left + i];
  for (let i = 0; i < rightLen; i++) rightArr[i] = arr[mid + 1 + i];

  let i = 0,
    j = 0,
    k = left;

  while (i < leftLen && j < rightLen) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }

  while (i < leftLen) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rightLen) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
};

const timSort = <T>(arr: T[]): void => {
  const n = arr.length;

  for (let i = 0; i < n; i += MIN_RUN) {
    const right = Math.min(i + MIN_RUN - 1, n - 1);
    insertionSort(arr, i, right);
  }

  let size = MIN_RUN;
  while (size < n) {
    for (let left = 0; left < n; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);

      if (mid < right) {
        merge(arr, left, mid, right);
      }
    }
    size *= 2;
  }
};

const arr = [0, 12, 444, 5235, 222, -324, -4, -42, 34, 2, 33, -34, -4, 4, 4];
timSort(arr);
console.log(arr);
