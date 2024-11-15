const quickSort = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr;
    const pivot = arr[0];
    const left: number[] = [];
    const right: number[] = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([123, 4523, 22, 4, -234, 324, 2666, -243, 0]));
