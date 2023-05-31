
//Current Assinment is at the bottom of the page. Good Luck!
//-Ross



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

//Array's ToDo
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
    var num = arr[0];
    for(i =0;i < arr.length-1; i++){
        arr[i] = arr[i+1];
        
    }
    arr.pop();
    console.log(arr);
    console.log(num);
}

//popFront([0,5,10,15])

function insertAt(arr, index, num) {
    arr.push(num);
    console.log(arr);
    var temp = arr[arr.length-1];
    console.log(temp);
    arr[arr.length-1] = arr[index];
    arr[index] = temp;

    console.log(arr);
}
//insertAt([100,200,5], 2, 311);
//insertAt([9,33,7], 0, 42);

//STRING TODO

function removeBlanks(string){
    var arr = string.split(" ");
    var newString = arr.join("");
    console.log(newString);
}

//removeBlanks(" Pl ayTha tF u nkyM usi c ");

function getDigits(string){
    for(i = string.length-1; i >= 0; i--){
        if(isNaN(string[i])){
            string = string.replace(string[i],"");  
        }   
     }
    var num = Number(string)
    console.log(num);
}

//getDigits("abc8c0d1ngd0j0!8");
//getDigits("0s1a3y5w7h9a2t4?6!8?0");

function acronym(string){
    var arr1 = string.split(" ");
    var arr2 = [];
    for(i = 0; i < arr1.length; i++){
        arr2.push(arr1[i][0]);    
        }
        var newString1 = arr2.join("");
        var newString2 = newString1.toUpperCase();
        console.log(newString2);
    }

//acronym(" there's no free lunch - gotta pay yer way. ");
//acronym("Live from New York, it's Saturday Night!");

function countNonSpaces(string){
    var sum = 0;
    var newArr = string.split("");
    for (i = 0; i < newArr.length; i ++){
        if(newArr[i] != " "){
            sum++;
        }
    } 
    console.log(sum);
}

//countNonSpaces("Honey pie, you are driving me crazy");
//countNonSpaces("Hello world !");

function removeShorterStrings(arr, num){
    newArr = []
    for (i = 0; i < arr.length; i++){
        if(arr[i].length >= num){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4); 
//removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)

function minToFront1(arr){
    min = arr[0];
    console.log("min =", min)
    console.log(arr);
    
    //find min
    for(var i = arr.length; i > 0; i--){
        if (arr[i] < min){
            min = arr[i]; 
        }
        for(var i = arr.length; i > 0; i--){
            arr[i] = arr[i-1];
        }
    }
    console.log("min =", min);
        //move min to front
        arr[0] = min;
        console.log(arr);
}
//minToFront([4,2,1,3,5])
function minToFront(arr) {
    var min = arr[0];
    var idx = 0;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
            idx = i;
        }
    }
    for (var x = idx; x > 0; x--){
        var temp = arr[x];
        arr[x] = arr[x-1];
        arr[x-1] = temp;
    }
    return arr;
}
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.
var twoSum = function(nums, target) {
    for(i=0; i<nums.length;i++){
        for(j=0; j<nums.length;j++){
            if(nums[i]+nums[j]==target)
                return [i,j];
        }  
    }   
};

console.log(twoSum([3,2,4],6))