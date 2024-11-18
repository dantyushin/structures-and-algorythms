const recursiveBinarySearch = (
  arr: number[],
  item: number,
  start: number,
  end: number
): number => {
  let middle = Math.floor((start + end) / 2);
  if (item === arr[middle]) {
    return middle;
  }
  if (item < arr[middle]) {
    return recursiveBinarySearch(arr, item, start, middle - 1);
  } else {
    return recursiveBinarySearch(arr, item, middle + 1, end);
  }
};

console.log(
  recursiveBinarySearch(
    [0, 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233],
    55,
    0,
    15
  )
);
