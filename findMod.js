function mostOccurring(arr) {
    let counts = {};
    let maxCount = 0;
    let mostOccurringElement;

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        if (counts[value] === undefined) {
            counts[value] = 1;
        } else {
            counts[value]++;
        }

        if (counts[value] > maxCount) {
            maxCount = counts[value];
            mostOccurringElement = value;
        }
    }

    return mostOccurringElement;
}

console.log(mostOccurring([5, 3, 4, 5, 5]));
