var myNumber = 42;
var myName = "Ross";
var temp = myName;
myName = myNumber;
myNumber = temp;

//console.log(myName);

for (var i = -52; i < 1067; i++){
    //console.log(i);
}

function beCheerful (){
    console.log("Good Morning!")
}

for(i = 0; i < 99; i++){
    //beCheerful();
}

for(i = -300; i < 1; i++){
    if(i % 3 == 0){
        if(i == -6){
            continue
        }
        if(i == -3){
            continue
        }
        //console.log(i);
    }
}

var i = 2000;
while(i < 5281){
    //console.log(i);
    i++;
}

var num1 = 5;
var num2 = 22;
if(num1 == 5 && num2 == 21){
    //console.log("How did you know!!")
}
else{
    //console.log("Just another day...")
}

function leapYear(num){
    if (num % 4 == 0 && num % 100 != 0 || num % 400 == 0){
        console.log("Leap Year!")
    }
    else{
        console.log("Not!")
    }
}

//leapYear(1983);
var sum = 0;
for(i = 512; i < 4097; i++){
    if(i % 5 === 0){
        //console.log(i);  
        sum = sum + 1; 
    }
    
}
//console.log(sum);

for (i = 1; i < 101; i++){
    if (i % 5 == 0){
        //console.log(i)
        //console.log("Coding");
        if (i % 10 == 0 ){
            //console.log("Dojo");
        }
    }
}

function print(incoming){
    console.log(incoming);
}

//print(42);


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
        
    }
    arr.pop();
    console.log(arr);
    console.log(num);
}

//popFront([0,5,10,15])

function insertAt(arr, index, num) {
    for(i = 0; i < arr.length; i++){
      if(i == index){
        temp = arr[i];
        arr[i] = num;
        arr[i+1] = temp;
      }
}
    console.log(arr);
}
//insertAt([100,200,5], 2, 311);
//insertAt([9,33,7], 0, 42);