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