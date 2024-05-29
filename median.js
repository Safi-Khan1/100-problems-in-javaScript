function median(arr) {
    let sum = 0;
    arr = arr.sort((a, b) => a - b)
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    sum = sum / arr.length
    if (sum %2 !== 0) {
        let one = Math.ceil(sum)
        let two = Math.floor(sum)
         sum = one + two
    }
    return sum
}
console.log(median([1, 2, 4, 5, 3, 6,7]));