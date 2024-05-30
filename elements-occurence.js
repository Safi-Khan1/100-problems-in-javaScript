// Ist 

// function elemOcc(arr) {
//     let count = []
//     let occ = [];
//     let occLen = []

//     for (let i = 0; i < arr.length; i++) {
//         count = []
//         occ = [];
//         // console.log(occLen)
//         count = arr[i]
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 occ += arr[i]
//                 // arr.splice(arr[j],1)
//             }
//         }
//         let n = occ.length
//         let obj = [{
//             [count]: n
//         }]
//         occLen.push(obj)
//         // console.log(`count value is ${arr[i]} and ${occLen}`)
//     }
//     console.log(occLen);
//     return count
// }
// console.log("fun : " + elemOcc([1, 2, 1, 2, 3, 4, 5, 4, 5, 3, 2, 5, 6, 4, 2, 1, 4, 5]));


// Second

// function elemOcc(arr) {
//     let counts = {};

//     for (let i = 0; i < arr.length; i++) {
//         if (counts[arr[i]]) {
//             counts[arr[i]] += 1;
//         } else {
//             counts[arr[i]] = 1;
//         }
//     }

//     return counts;
// }

// console.log(elemOcc([1, 2, 1, 2, 3, 4, 5, 4, 5, 3, 2, 5, 6, 4, 2, 1, 4, 5]));


// Third

function elemOcc(arr) {
    let occLen = [];  

    for (let i = 0; i < arr.length; i++) {
        let count = arr[i];  
        let occ = 0;  

       
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                occ++;  
            }
        }

        
        let alreadyAdded = occLen.some(obj => obj[count] !== undefined);
        if (!alreadyAdded) {
            let obj = { [count]: occ };  
            occLen.push(obj); 
        }
    }

    console.log(occLen); 

    return occLen;
}

console.log("fun : ", elemOcc([1, 2, 1, 2, 3, 4, 5, 4, 5, 3, 2, 5, 6, 4, 2, 1, 4, 5]));

