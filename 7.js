let Number = window.prompt("Enter your number:");
let numberArrray = Number.split("");

let string = "";
let k =numberArrray.length;
let j;


for(let i = k-1; i>=0 ; i--){
    j =  numberArrray[i];
    string += j;
}
alert (string);



