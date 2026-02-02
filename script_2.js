//console.log("First Line")
//setTimeout(()=>{
//    console.log("After 2 Sec")
//}, 2000)
//console.log("Second Line")

//setTimeout(()=>{
//    alert("Alert after 3 sec")
//},3*1000)

//const timerId=setInterval(()=>{
//    console.log("Hello Students")
//}, 1000)

//console.log(timerId)
//setTimeout(()=>{
//    clearInterval(timerId)
//}, 10*1000)

//let count = 1

//const countInterval = setInterval(()=>{
//    console.log(count);
//    count ++;

//    if (count > 10){
//        clearInterval(countInterval);
//    }
//}, 10);

function print(){
    console.log("Hello Students!")
}

function greet(num){
    console.log("Welcome to the class!")
    num()
}

greet(print)