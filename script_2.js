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

//function print(name){
//    console.log("Hello Students!")
//}

//function greet(num){
//    console.log("Welcome to the class!")
//    setTimeout(()=>{
//        console.log("Inside SetTimeout")
//        let firstName="Alex"
//        num(firstName)
//    }, 2000);
//}

//greet(print)


//console.log("Starting homework...");
//setTimeout(()=>{
//    console.log("Homework Done!...");
//    console.log("Starting Dinner...");

//    setTimeout(()=>{
//        console.log("Dinner Done!");
//        console.log("Getting Ready to go out...");
//    setTimeout(()=>{
//        console.log("going to the playground!");
//    }, 1000);
//    }, 1500);
//}, 2000);

//function finishHomework(callback) {
//    console.log("Starting homework...");
//    setTimeout(() => {
//        console.log("Homework Done!");
//        callback();
//    }, 2000);
//}

//function eatDinner(callback) {
//    console.log("Starting Dinner...");
//    setTimeout(() => {
//        console.log("Dinner Done!");
//        callback();
//    }, 1500);
//}

//function goToPlayground() {
//    console.log("Going to the playground!");
//}
//finishHomework(() => {
//    eatDinner(() => {
//        goToPlayground();
//    });
//});

//const input=document.querySelector('task')
//const btn=document.querySelector(".btn")
//const lists=document.querySelector(".list")

//btn.addEventListener('click',(e)=> {
//    e.preventDefault();
//    const task = input.value;
//    if (task.trim() === '') return;
//    const li = document.createElement('li');
//    li.textContent = task;
//    lists.appendChild(li);
//    input.value = '';
//});

//function doHomework() {
//return new Promise((resolve, reject) {
//setTimeout(() => {
//let homeworkDone = true;
//if (homeworkDone) {
//console.log("Homework is done");
//resolve("Homework complete");
//} else {
//reject("Homework not done");
//}
//}, 3000);
//});
//}

//const p=new Promise( function(resolve,reject){
//    setTimeout(()=>{
//    let done=false;
//    if(done){
//        resolve({name:'alex',Age:34})
//    }else{
//        reject('Network Issue')
//    }
//},5000)
//})

//console.log(p)

//p.then((data)=>(console.log('Resolved',data)
//)).catch((err)=>{
//  console.log('Rejected',err)
//}).finally(()=>{
//    console.log('Finally Block')
//})

//function goToPlayground() {
//return new Promise((resolve, reject) => {
//setTimeout(() => {
//let permission= true;
//if (permission) {
//console.log(" Went to the playground");
//resolve("Playground time!");
//} else {
//reject(" Not allowed to go out");
//}
// }, 3000);
// });
// }

// doHomework()
// .then((data) => {
// console.log(data);
// return eatDinner();
// })
// .then((data) => {
// console.log(data); return goToPlayground();
// })
// .catch((error) => {
// console.log("Something went wrong:",error );
// })
// .finally(() => {
// console.log("Day ended Go to sleep");
//});

// console.log("First Line")
// setTimeout(() =>{
    // console.log("Inside Timeout")
// },0)
// const p=new Promise((reolve, reject)=>{
    // resolve()
// })
// p.then(()=>{
    // console.log("Inside Promise")
// }).catch(()=>{
    // console.log("Inside Catch")
// })
// const p3=new Promise((resolve, reject)=>{
//     resolve()
// })
// p3.then(()=>{
//     console.log("Inside Promise")
// }).catch(()=>{
//     console.log("Inside Catch")
// })
// console.log("Last Line")

function orderFood(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Food Ordered");
            resolve("Food Ordered");
        }, 1000)
    })
}

function prepareFood(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Food Prepared");
            resolve("Food Prepared");
        }, 3000)
    })
}

function deliverFood(){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            console.log("Food Delivered");
            resolve("Food Delivered");
        }, 2000)
    })
}

async function order(){
    const data=await orderFood()
    console.log(data)
    await prepareFood()
    await deliverFood()
}

order();

console.log("First Line")
try{
    let age = 19
    if(age<18){
        throw new Error("Access Denied")
    console.log(sample)
    }
}catch(error){
    console.log(error)
}finally{
    console.log("Finally Black")
}
console.log("last line")

async function getData(){
    try{
        const response= await fetch("https://dummyjson.com/products")
        console.log(response.ok)
        if(response.ok===false)throw new Error("Data Not Found")
        const data=await response.json()
        console.log(data)
        // data.products.forEach((ele)=>{
        //     console.log(ele.price)
        // })    
    }catch(error){
        console.log("Data Not Found")
    }
    
}