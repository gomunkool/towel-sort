function towelSort(matrix) {
    if (matrix.length === 0) {
        let empty = [];
        return empty;
    } else {
        for (let i = 1; i < matrix.length; i = i + 2) {
            matrix[i].reverse();
        }

        let res = [];
        for (let y = 0; y < matrix.length; y++) {
            res = res.concat(matrix[y]);
        }
        return res;
    }
}

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
console.log(towelSort(matrix));
