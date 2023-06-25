//Print integers from -52 to 1066 using a FOR loop.
for(var i = -52; i < 1067; i++){
    //console.log(i);
}
//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
function beCheerful(){
    console.log("good morning!")
}
for(i = 0; i < 99; i ++ ){
    //beCheerful();
}

//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
for(i = -300; i < 0; i++){
    if(i == -3){
        continue;
    }
    if(i == -6){
        continue;
    }
//console.log(i)
}

//Print integers from 2000 to 5280, using a WHILE.
var num = 2000
while(num < 5281){
    //console.log(num)
    num++
}

//If 2 given numbers represent your birth month 
//and day in either order, log "How did you know?", 
//else log "Just another day...." 
function birthday(month, day){
    if (month == 5 && day == 21){
        console.log("How did you know?")
    }
    else{
        console.log("Just another day....")
    }
}

//birthday(5,21);

function leapYear(year){
    if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
        console.log("Leap Year!")
    }
    else{
        console.log("Not!")
    }
    
} 
//leapYear(1982);

//Print all integer multiples of 5, from 512 to 4096. 
//Afterward, also log how many there were.
sum = 0
for (i = 512; i < 4097; i++){
    //console.log(i)
    sum++
}
//console.log('Sum = ' + sum)

//Print multiples of 6 up to 60,000, using a WHILE

num = 6

//while(num < 60001){
    //if (num % 6 == 0)
    //console.log(num)
    //num++
//}

//Print integers 1 to 100. If divisible by 5, print "Coding" instead. 
//If by 10, also print " Dojo".

for(i = 1; i < 101; i++){
    if(i % 5 == 0){
        //console.log("Coding")
    }
    if(i % 10 == 0){
        //console.log("Dojo")
    }
    else{
        //console.log(i)
    }
}

//Your function will be given an input parameter incoming. Please console.log this value.
 function printMe(input){
    return input
 }

//console.log(printMe("Hello World"))

//Add odd integers from -300,000 to 300,000, 
//and console.log the final sum. Is there a shortcut?
    sum = 0
    for (var i = -299999;i <= 299999; i+=2){
        sum = sum + i    
    }
    //console.log(sum)
    
    //Log positive numbers starting at 2016, 
    //counting down by fours (exclude 0), without a FOR loop.
    num = 2017
    while(num >= 0){
        num--
        if (num % 4 == 0){
            //console.log(num)
        }
    }

    //Based on earlier “Countdown by Fours”, 
    //given lowNum, highNum, mult, 
    //print multiples of mult from highNum down to lowNum,
    //using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function countDown(lowNum,highNum,mult){
    for( i = highNum; i > lowNum; i -- ){
        if (i % mult == 0){
            console.log(i)
        }
    }
}

//countDown(2,9,3)

function finalCountDown(mult,lowNum,highNum,skip){
    for( i = lowNum; i < highNum; i ++ ){
        if(i == skip){
            continue
        }
        if (i % mult == 0){
            console.log(i)
        }
    }
}

//finalCountDown(3,5,17,9)

//Create a function that accepts a number as an input. 
//Return a new array that counts down by one, 
//from the number (as array’s ‘zeroth’ element) down to 0 (as the last element).
//How long is this array?

function createArray(num){
 arr = []
    for(var i = num; i >= 0; i--){
        arr.push(i)
    }
    return arr
}
//console.log(createArray(10))

//Your function will receive an array with two numbers. 
//Print the first value, and return the second.

function printReturn([num1,num2]){
    console.log(num1)
    return num2
}

//console.log(printReturn([1,2]))

//Given an array, return the sum of the first value in the array, plus the array’s length. 
//What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr){
    num = arr[0] + arr.length

    return num
}

//console.log(firstPlusLength(["one",2,3,4,5]))

function returnGreater(arr){
    num = 0
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > arr[1]){
            console.log(arr[i])
            num++ 
        }
    }  
    return "num = " + num    
}

//console.log(returnGreater([1,3,5,7,9,13]))

function returnGreater2(arr){
    num = 0
    arr2 = []
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > arr[1]){
            arr2.push(arr[i])
            num++ 
        }
    }  
    console.log(arr2)
    return "num = " + num    
}
//console.log(returnGreater2([1,3,5,7,9,13]))

//Given two numbers, return array of length num1 with each value num2. 
//Print "Jinx!" if they are same.
function thisLength(num1,num2){
    arr=[]
    if(num1 == num2){
        console.log("Jinx!")
    }
    for(var i = 0; i < num1; i ++){
        arr[i] = num2
    }
    return arr
}

//console.log(thisLength(5,9))

//Your function should accept an array. 
//If value at [0] is greater than array’s length, 
//print "Too big!"; if value at [0] is less than array’s length, 
//print "Too small!"; otherwise print "Just right!".

function threeBears(arr){
    
    if(arr[0] > arr.length){
        console.log('Too Big!')
    }
    if(arr[0] < arr.length){
        console.log('Too small!')
    }
    if(arr[0] == arr.length){
        console.log('Just right!')
    }
    
}

//threeBears([9,2,3])

//Kelvin wants to convert between temperature scales. 
//Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit 
//and returns the equivalent temperature as expressed in Celsius degrees. 
//For review, Fahrenheit = (9/5 * Celsius) + 32.

function fahrenheitToCelsius(fDegrees){
    cDegrees = (fDegrees - 32) * 5 / 9

    console.log(fDegrees + "F = " + cDegrees + "C" )
}

//fahrenheitToCelsius(92)

function celsiusToFahrenheit(c){
    f = (c * 9/5) + 32

    console.log(c + "C = " + f + "F")
}

//celsiusToFahrenheit(32)

//Given an array, write a function that changes all positive numbers in the array to “big”.

function posToNeg(arr){
    for (i = 0; i < arr.length; i++){
        if( arr[i] > 0){
            arr[i] = "big"
        }
    }
    return arr
}

//console.log(posToNeg([-3,5,-2,9]))

//Create a function that takes an array of numbers. 
//The function should print the lowest value in the array, and return the highest value in the array.

function lowToHigh(arr){
    lowNum = arr[0]
    highNum = arr[0]
    for(i=0;i<arr.length;i++){
        if(arr[i]<lowNum){
            lowNum = arr[i]
        }
        if(arr[i]>highNum){
            highNum = arr[i]  
        }
    }
    console.log('low = ' + lowNum)
    return("high = " + highNum)
}

//console.log(lowToHigh([6,13,1,12]))

//Build a function that takes an array of numbers. 
//The function should print the second-to-last value in the array, 
//and return first odd value in the array.

function odd(arr){
    oddNum = arr[0]
    console.log(arr[arr.length-2])
    for(i = 0; i < arr.length; i++){
        if(arr[i] % 2 != 0){
            oddNum = arr[i]
            break
        }
    }
    return oddNum
}

//console.log(odd([2,4,4,6,7,9]))

//Given an array, create a function to return a new array where 
//each value in the original has been doubled. 
//Calling double([1,2,3]) should return [2,4,6] without changing original.

function double(arr){
    for(i = 0; i < arr.length; i++){
        arr[i] *= 2
    }
    return arr
}

//console.log(double([1,3,6,3]))

//Given an array of numbers, create a function to replace last value with the number of positive values. 
//Example,  countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function replacePos(arr){
    num = 0
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            num++
        }
        arr[arr.length - 1] = num
    }
    return arr
}

//console.log(replacePos([-1,1,1,1,1]))

//Create a function that accepts an array. 
//Every time that array has three odd values in a row, 
//print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

function evenOdd(arr){
    for(var i = 0;i < arr.length;i++){
        if(arr[i] % 2 === 0 && arr[i-1]  % 2 === 0 && arr[i-2] % 2 === 0){
            console.log("Even more so!");
        }
        else if(arr[i] % 2 === 1 && arr[i-1] % 2 === 1 && arr[i-2] % 2 === 1){
            console.log("That's odd!");
        }
    }
}

//evenOdd([1,1,1])

function checkArray(arr) {
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] % 2 === 1 && arr[i - 1] % 2 === 1 && arr[i - 2] % 2 === 1) {
            console.log("That's odd!");
        } else if (arr[i] % 2 === 0 && arr[i - 1] % 2 === 0 && arr[i - 2] % 2 === 0) {
            console.log("Even more so!");
        }
    }
}

//checkArray([1,1,1])

//Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

function oddPlus1(arr){
    for(var i = 0;i < arr.length;i++){
        if(arr[i] % 2 == 1){
            arr[i] = arr[i] + 1
        }
    }
    return arr
}
//console.log(oddPlus1([1,2,4,5,3]))

//You are passed an array containing strings. 
//Working within that same array, replace each string with a number – 
//the length of the string at previous array index – and return the array.

function replaceString(arr){
    str = ''
    for(var i = 1;i < arr.length; i++){
        str = arr[i -1]
        arr[i] = str.length
    }
    return arr     
}

//console.log(replaceString(['here','we','go','again']))

//Build a function that accepts an array. 
//Return a new array with all values except first, adding 7 to each. 
//Do not alter the original array.

function add7(arr){
    newArr = []
    for(var i = 1; i < arr.length; i++){
        newArr.push(arr[i])
    }
    console.log(arr)
    for(var i = 0; i < newArr.length; i++){
        newArr[i] = newArr[i] + 7
    }
    return newArr
}

console.log(add7([1,3,14,3,21]))