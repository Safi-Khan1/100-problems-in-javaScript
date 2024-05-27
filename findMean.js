function Mean(arr){
    let sum =0;
    let mean=0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        
    }
    return sum/arr.length
}
console.log(Mean([1,2,3,4,5]));