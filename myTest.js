function towelSort(matrix) {
    if (matrix && matrix.length) {
        for (let i = 1; i < matrix.length; i = i + 2) {
            matrix[i].reverse();
        }

        let res = [];
        for (let y = 0; y < matrix.length; y++) {
            res = res.concat(matrix[y]);
        }
        return res;
    }
    return [];
}

console.log(towelSort;
