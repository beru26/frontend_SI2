var array = [26, 2, 6, 23, 30, 10, 44];

function quickSort(arr) {
    var left = [];
    var right = [];
    var pivot = arr[0];

    if(arr.length < 2) {
        return arr;
    }

    for(var i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(array);
console.log(quickSort(array));
