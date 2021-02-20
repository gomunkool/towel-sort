function towelSort(matrix) {
    if (matrix.length > 0) {
        for (let i = 1; i < matrix.length; i = i + 2) {
            matrix[i].reverse();
        }

        let res = [];
        for (let y = 0; y < matrix.length; y++) {
            res = res.concat(matrix[y]);
        }
        return res;
    } else {
        let empty = [];
        return empty;
    }
}

let matrix = [];
console.log(towelSort(matrix));
