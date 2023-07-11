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

//console.log(add7([1,3,14,3,21]))

//Given array, write a function to reverse values, in-place. 
//Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3]

function reverse(arr){
    for(var i = 0; i < arr.length / 2; i++){
        temp = arr[0]
        arr[0] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    
    
    return arr
}

//console.log(reverse([1,2,3,4,5]))

//Given an array, create and return a new one containing all the values of the provided array, 
//made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function madeNagative(arr){
    var newArr= []
    for (var i = 0; i < arr.length; i++){
        console.log("test " + arr[i])
        if(arr[i] < 0){
            newArr.push(arr[i])
        }
        else if(arr[i] > 0){
            arr[i] = -arr[i]
            console.log("New " + arr[-i])
            newArr.push(arr[i])
        }
        console.log(newArr)

    }     
}

//madeNagative([1,2,-3,4])

//Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food". 
//If no array elements are "food", then print "I'm hungry" once.

function hungry(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === "food"){
            console.log('Yummy!')
        }
        else{
            console.log("I'm Hungry")
        }
    }
}

//hungry(["food",1,6,'food','not food',3,'food'])

//Given array, swap first and last, third and third-tolast, etc. 
//Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  
//Change [1,2,3,4,5,6] to [6,2,4,3,5,1].

function swapEven(arr){
    temp = 0
    for(var i = 0; i < arr.length/2; i++){
        if ( i % 2 == 0){
            j = arr.length-1-i
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
    return arr
}

//console.log(swapEven([1,2,3,4,5,6]))

function reverseArr(arr){
    temp = 0
    for(var i = 0; i < arr.length/2; i++){
        j = arr.length-1-i
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr
}

//console.log(reverseArr([true,42,"Ada",2,"pizza"]))

//Given array arr and number num, multiply each arr value by num, 
//and return the changed arr.

function timesNum(arr, num){
    for(var i = 0;i < arr.length; i++){
        arr[i] = arr[i] * num
    }
    return arr
}

//console.log(timesNum([2,4,6,8], 2))

//Given array arr and number X, remove all except the last X elements, 
//and return arr (changed and shorter). 
//Given ([2,4,6,8,10],3), change the given array to [6,8,10] and return it.

function lastFew(arr,x){
    for(var i = 0; arr.length > x; i++){
        for(var j = 0; j < arr.length-1; j++){
            arr[j] = arr[j+1]
        } 
        arr.pop() 
    }
    return arr
}

//console.log(lastFew([1,2,3,4,5,6,2], 3))

//Cartman doesn’t really like math; he needs help. 
//You are given two numbers – coefficients M and B in the equation Y = MX + B. 
//Build a function to return the X-intercept 
//(his older cousin Fiaz wisely reminds him that X-intercept is the value of 
//X where Y equals zero; 
//Cartman just snorts in his general direction).

function intercept(M,B){
    //Y = (M * X) + B
}

//Kenny tries to stay safe, but somehow everyday something happens. 
//Out of the last 100 days, there were 10 days with volcanos, 15 others with tsunamis, 
//20 earthquakes, 25 blizzards and 30 meteors (for 100 days total). 
//If these probabilities continue, write whatHappensToday() to print a day’s outcome.

function whatHappensToday(){

}

//Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated 
//to the chance of another. Change whatHappensToday() function to create 
//whatReallyHappensToday(). In this new function test for each disaster independently, 
//instead of assuming exactly one disaster will happen. 
//In other words, with this new function, all five might occur today – or none. 
//Maybe Kenny will survive!

function whatReallyHappensToday() {

}

//Your time at the Dojo will definitely make you smarter! 
//Let’s say a new Dojo student, Bogdan entered with a modest IQ of 101. 
//Let’s say that during a 14-week bootcamp, his IQ rose by .01 on the first day, 
//then went up by an additional .02 on the second day, then up by .03 more on the third day, etc. 
//all the way until increasing by .98 on his 98th day (the end of 14 full weeks). 
//What is Bogdan’s final IQ?

function finalIQ(){
    IQ = 101
    x = .01
    for(i = 0; i < 99; i++){
        IQ = IQ + x
        console.log(IQ)
        IQ++
        x = x + 0.01
        
    }
    return IQ
}

//console.log(finalIQ())

//Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, 
//given an integer representing a score from 0 to 100? 
//Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, 
//and lower than 60 receive ‘F’. 
//For example, given 88, you should log "Score: 88. Grade: B". 
//Given the score 61, log the string "Score: 61. Grade: D".//

function letterGrade(score){
    if (score < 60){
        console.log("Score: " + score + ". Grade: F")
    }
    else if( score > 59 && score < 65){
        console.log("Score: " + score + ". Grade: D-")
    }
    else if( score > 64 && score < 70){
        console.log("Score: " + score + ". Grade: D+")
    }
    else if( score > 69 && score < 75){
        console.log("Score: " + score + ". Grade: C-")
    }
    else if( score > 74 && score < 80){
        console.log("Score: " + score + ". Grade: C+")
    }
    else if( score > 79 && score < 85){
        console.log("Score: " + score + ". Grade: B-")
    }
    else if( score > 84 && score < 90){
        console.log("Score: " + score + ". Grade: B+")
    }
    else if( score > 89 && score <= 100){
        console.log("Score: " + score + ". Grade: A")
    }
}

//letterGrade(89)

/*
Implement function sigma(num) that given a number, 
returns the sum of all positive integers up to number (inclusive). 
Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5).
 */

function sigma(num){
    sum = 0
    for (let i = 0; i < num; i++){
        sum = sum + i
    }
    return sum
    
}

//console.log(sigma(100))

/*
Just the Facts, ma’am. Factorials, that is. 
Write a function factorial(num) that, given a number, 
returns the product (multiplication) of all positive integers 
from 1 up to number (inclusive). 

For example, factorial(3) = 6 (or 1 * 2 * 3); 
factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5).
*/

function factorial(num){
    sum = 1
    for (let i = 1; i <= num; i++){
        sum = sum * i
    }
    return sum
    
}

//console.log(factorial(5))

/*
Write a function drawLeftStars(num) that accepts a number 
and prints that many asterisks.
*/

function drawLeftStars(num){
    let arr=[]
    for(let i = 0; i < num; i++){
        arr.push('*')
    }
    let str = arr.join('')
    return str
}

//console.log(drawLeftStars(3))

function drawRightStars(num){
    let arr = []
    for(let i = 0; i < 76; i++){
        arr.push(' ')
    }
    end = arr.length - 1
    for(let i = 0; i < num; i++){
        arr[end] = '*'
            end--  
    }
    let str = arr.join('')
    return str
}
//console.log(drawRightStars(12))

function drawCenteredStars(num){
    let arr = []
    let start = (76/2)
    for(let i = 0; i < start; i++){
        arr.push(' ')
    }
    center = arr.length - 1
    for(let i = 0; i < num; i++){
        arr[center] = '*'
            center--  
    }
    for(let i = 0; i < 76 - (start + num);i++){
        arr.push(' ')
    }
    let str = arr.join('')
    return str
}

//console.log(drawCenteredStars(3))

function drawLeftChar(num, char){
    let arr=[]
    for(let i = 0; i < num; i++){
        arr.push(char)
    }
    let str = arr.join('')
    return str
}

console.log(drawLeftChar(5,'$'))