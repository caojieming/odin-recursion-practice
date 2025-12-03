function fibs(num) {
    let out = [];

    if(num <= 0) {
        return out;
    }
    out.push(0);

    if(num === 1) {
        return out;
    }
    out.push(1);
    
    for(let i = 2; i < num; i++) {
        const sum = out[i - 1] + out[i - 2];
        out.push(sum);
    }

    return out;
}
console.log("fibs() testing");
console.log("fibs(-1): " + fibs(-1));
console.log("fibs(0): " + fibs(0));
console.log("fibs(1): " + fibs(1));
console.log("fibs(2): " + fibs(2));
console.log("fibs(3): " + fibs(3));
console.log("fibs(8): " + fibs(8));
console.log();


function fibsRec(num) {
    let out = [];

    for(let i = 0; i < num; i++) {
        out.push(singleFibRec(i));
    }

    return out;
}
function singleFibRec(n) {
    if(n <= 1) {
        return n;
    }
    else {
        return singleFibRec(n - 1) + singleFibRec(n - 2);
    }
}
console.log("fibsRec() testing");
console.log("fibsRec(-1): " + fibsRec(-1));
console.log("fibsRec(0): " + fibsRec(0));
console.log("fibsRec(1): " + fibsRec(1));
console.log("fibsRec(2): " + fibsRec(2));
console.log("fibsRec(3): " + fibsRec(3));
console.log("fibsRec(8): " + fibsRec(8));
console.log();


// takes in an array and continuously halves it until it can't be halved anymore, than merges(sorts) the smallest halves together, moving upwards
function mergeSort(arr) {
    // base case: arr is only either 1 number or no numbers
    if(arr.length <= 1) {
        return arr;
    }
    else {
        const mid = Math.ceil(arr.length / 2);
        const left = arr.slice(0, mid);
        let right = arr.slice(mid, arr.length);
        return merge(mergeSort(left), mergeSort(right));
    }
}
// sorts 2 arrays together, assuming both halfs are sorted
function merge(arr1, arr2) {
    let merged = [];

    while(arr1.length > 0 && arr2.length > 0) {
        if(arr1[0] <= arr2[0]) {
            merged.push(arr1[0]);
            arr1.shift();
        }
        else if(arr1[0] > arr2[0]) {
            merged.push(arr2[0]);
            arr2.shift();
        }
    }

    // likely still have 1 non-empty array, so concat the rest of arr1 and arr2 onto merged
    merged = merged.concat(arr1).concat(arr2);
    return merged;
}
console.log("mergeSort() testing");
console.log("mergeSort([73]): " + mergeSort([73]));
console.log("mergeSort([1, 2, 3, 4, 5]): " + mergeSort([1, 2, 3, 4, 5]));
console.log("mergeSort([3, 2, 1, 13, 8, 5, 0, 1]): " + mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log("mergeSort([105, 79, 100, 110]): " + mergeSort([105, 79, 100, 110]));
