var array = [15, 2, 26, 3, 6, 178, 1];

function bubbleSort(arr) {
    var i,j,
        len = arr.length;

    while(len--) {
        for(i = 0, j = 1; i < arr.length; i++, j++) {
            if(arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}

console.log(array);
console.log(bubbleSort(array));
