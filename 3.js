let number1 = window.prompt("Enter the Numeber one:");
let number2 = window.prompt("Enter the Number two:");
let number3 = window.prompt("Enter the Number three:");
let MaxNumber = "";
if(number1>number2){
    if(number1>number3){
         MaxNumber = number1;
    }else{
        MaxNumber = number3;
    }
    
}else if(number2>number3){
     MaxNumber = number2;
}else{
     MaxNumber = number3;
}

alert(MaxNumber);