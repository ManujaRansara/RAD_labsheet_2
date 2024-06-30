let date = new Date();
let time = date.getHours;
//let time = 19.24;
let msg;
if(time < 10){
     msg = "Good marning";
}else if(time < 20){
     msg = "Good day";
}else{
     msg = "Good evening";
}

console.log(msg);
