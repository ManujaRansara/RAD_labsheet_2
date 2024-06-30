let Number = window.prompt("Enter your number:");
let msg = "";
let count = 0;
for(let i = 2; i< Number ; i++){ 
    if(Number % i === 0){
        msg = "is not a prime number.";
        break;
    }else{
        count++;
    }

}
if (count === Number-2){
    msg = "is a prime number";
}

alert(Number + " "+ msg );