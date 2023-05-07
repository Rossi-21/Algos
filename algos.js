function pushFront (arr, num) {
    for(var i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];  
    }
    arr[0] = num;
    console.log(arr);
}

pushFront([5,7,2,3], 8);