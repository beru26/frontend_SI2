function binarySearch(arr, val) {
    var start = 0;
    var end = arr.length -1;

    while(start<=end) {
        var mid = Math.floor((start + end) / 2);
        if(arr[mid] < val) {
            start = mid + 1;
        }else if(arr[mid] > val) {
            end = mid - 1;
        }else{
            return mid;
        }
    }
    return -1;
}

var array = [2, 6, 14, 26, 44];
var value = 14;
var retVal = binarySearch(array, value);

if(retVal >= 0) {
    console.log(value + " found at position " + retVal);
}else{
    console.log("Not found");
}
