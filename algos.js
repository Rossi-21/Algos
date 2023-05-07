function pushFront (arr, num) {
    for(var i = arr.length; i > 0; i--) {
        arr[i] = arr[i-1];  
    }
    arr[0] = num;

    console.log(arr);
}

//pushFront([5,7,2,3], 8);
//pushFront([99], 7);

function popFront (arr) {
    num = arr[0];
    for(i =0;i < arr.length-1; i++){
        arr[i] = arr[i+1];
        arr.length = arr.length-1;
    }
    console.log(arr);
    console.log(num);
}

popFront([0,5,10,15])