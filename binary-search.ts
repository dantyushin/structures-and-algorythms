const binarySearch = (arr: number[], target: number): number => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};

const arr1 = [0, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233];
console.log(binarySearch(arr1, 55));
