const mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge1(mergeSort(left), mergeSort(right));
}

const merge1 = (left: number[], right: number[]): number[] => {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

console.log(mergeSort([100, 123, 213, 1, 0, -414, 12, 5, 55, 545]));
