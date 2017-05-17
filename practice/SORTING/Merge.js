var array = [26, 2, 6, 14, 1, 20];

function mergeSort(arr) {
    
    if(arr.length < 2) {
        return arr;
    }
    
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var final = [];
    var lIndex = 0;
    var rIndex = 0;
    
    while(lIndex < left.length && rIndex < right.length) {
        if(left[lIndex] < right[rIndex]) {
            final.push(left[lIndex]);
            lIndex++;
        }else{
            final.push(right[rIndex]);
            rIndex++;
        }
    }
    return final.concat(left.slice(lIndex)).concat(right.slice(rIndex));
}

console.log(array);
console.log(mergeSort(array));