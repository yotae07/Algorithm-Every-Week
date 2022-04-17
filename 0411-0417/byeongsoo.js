const solution = (k, array) => {
    const n = array.length;
    let sumArray = [];
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let k = i + 1; k < n; k++) {
            for (let j = k + 1; j < n; j++) {
                sumArray.push(array[i] + array[j] + array[k]);
            }
        }
    }
    sumArray.sort((a, b) => b - a);
    return sumArray[k - 1];
};
