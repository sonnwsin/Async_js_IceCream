let stocks = {
    Fruits : ["strawberry" , "grapes" , "banana" , "apple"],

    liquid : ["water" ,"ice"],
    holder :["cone" , "cup" , "stick"],
    toppings : ["chocolate" , "penuts"]

}


let is_shop_open= true


//setTimeout(()=>console.log("hii") , 1000)  // its a async function

// callbaxks 

// function two(){
//     console.log("step2")
// }

// function one(callback){
//     callback()
//     console.log("step1")

// }


// one(two);      // make sure to end 2nd as a call back 


// let order = (callproduction)=>{
//     console.log("got order")
//     callproduction()
// }

// let production = ()=>{
//     console.log("production startde")
// }

// order(production)

// console.log(stocks.Fruits[0]) ;

// console.log(stocks)




// callbacl males parents
//call back on fruits 

// let order = (fruit_name ,  callback) => {

//     setTimeout(()=>{console.log(`${stocks.Fruits[fruit_name]} was selected`) ;
//     callback();
// },2000)
    
// }
// // call back hell 
// let production = () => {

//     setTimeout(()=>{
//         console.log("Production started");

//         setTimeout(()=>{
//             console.log("Fruit has been chopped");

//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

//                 setTimeout(()=>{
//                     console.log("Machine started");

//                     setTimeout(()=>{
//                         console.log(`Ice cream placed on ${stocks.holder[0]}`);

//                         setTimeout(()=>{
//                             console.log(`${stocks.toppings[0]} added as topping`);

//                             setTimeout(()=>{
//                                 console.log("Ice cream served 🍦");
//                             },1000)

//                         },1000)

//                     },1000)

//                 },1000)

//             },1000)

//         },2000)

//     },0)
// }

// order(2 , production) 



//promises 
// deep ice cream making process

// let order = ( work ,time )=>{


//     return new Promise((resolve , reject)=>{
//         if(is_shop_open){


//           setTimeout(()=>{} , time)
//             setTimeout(()=>{

//             resolve(work());
//             } , 2000)
//         }
//         else{
//             reject(console.log(`didnt work shop was closed`))
//         }
//     })
// }


// order(() => console.log(`${stocks.Fruits[0]} is selected`), 2000)

// .then(() => {
//     return order(() => console.log("production has started"), 0);
// })

// .then(() => {
//     return order(() => console.log("fruit chopped"), 2000);
// })

// .then(() => {
//     return order(() => console.log("water and ice added"), 1000);
// })

// .then(() => {
//     return order(() => console.log("ice cream served 🍦"), 1000);
// })

// .catch((err) => {
//     console.log(err);
// })

// .then(() => {
//      console.log("day ended, shop is closed");
// });


// saync await 
// very deep ice cream uwu 🐻‍❄️


// order() =>{
//   return new Promise((resolve , reject)=>{
  
//     if(){
//       resolve()
//     }
  
//     else{
//       reject()
//     }
//   }
// )
// }


// order()
// .then()
// .then()
// .then()
// .catch()
// .finall()


// async function order(){

//   try{
//     await abc;
//   }
//   catch(error){
//     console.log("error has occured" , error)
//   }

//   finally{
//     console.log("runs anyway")
//   }
// }

// order().then(()=>{
//   console.log("hii wassup daug")
// })

// let toppings_choice = ()=>{
//   return new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//       resolve(console.log("which topping do you want?"))
//     },3000)
//   })
// }

// async function kitchen() {
//   console.log("A")
//   console.log("B")
//   console.log("C")
//   await toppings_choice()
//   console.log("D")
//   console.log("E")
// }

// kitchen()
//  .then(()=>{

//   console.log("Thanks for coming to our shop")
//  })



// shoup async await with time 



// function time (ms){

//   return new Promise((resolve , reject)=>{
    

//     if(is_shop_open){
      
//       setTimeout(resolve , ms)
//     }
//     else{
//       reject("shop is closed")
//     }
//   })
// }


// async function kitcher(time){ 
//   try {

//     await time(2000)    
//     console.log(`${stocks.Fruits[0]}`+"s selected" )

//     await time(1000)

//     console.log("production has started")

//     await time(2000)

//     console.log("fruit chopped")

//     await time (1000)
//     console.log("gg bro water and ice added")
    
//     await time(1000)

//     console.log("ice cream served 🍦")

//     await(time(1000))

//     console.log("wassup daug did you enjoyed ??")
//     await time(1000)

//     console.log("hop1 you come back again ")
  
//   }
//   catch(error){
//     console.log("error has occured" , error)
//   }
 
//   finally{
//     console.log("day ended shop is closed")
//    }
// }


// kitcher(time)


// done with ice creaem shop :)


//🚀 TASK 1 — Basic Promise (Warmup) 👉 Ek function banao: 🧾 Requirement: Function name: checkNumber Input: number Output: Even → resolve("Even number") Odd → reject("Odd number") 💡 Example: checkNumber(4) → "Even number" checkNumber(3) → "Odd number" 👉 Promise use karo 👉 .then() & .catch() bhi lagao



// function checkNumber( num){
//   return new Promise((resolve , reject )=>{


//     if( num %2 == 0){
//       resolve("Even number")

//     }

//     else{
//       reject("number is odd")
//     }
//   })
// }

// checkNumber (3)
// .then((result)=>{
//   console.log(result)
// })

// .catch((err) => console.log(err))



// function checkNUmber(num){

//   return new Promise((resolve , reject) =>{

//     if(num % 2 == 0 ){

//       resolve("even number")
//     }

//     else{
//       reject("odd number")
//     }
//   }
// )
// }


// function checkNumber2(num){

//   return new Promise((resolve, reject ) =>{
//     if(num % 2 != 0 ){
//       resolve("odd number slected")

//     }

//     else{
//       reject("even number selected")
//     }
//   })
// }


// task 2  same mathod with async await 

// function checkNumber3(num){
//   return new Promise((resolve , reject ) =>{

//     if(num % 2 == 0 ){
//       resolve("een number")


//     }

//     else{
//       reject("odd number")

//     }

//   })

// }

// checkNumber3(34).then((result) => console.log(result)).catch((err) => console.log(err));




// async function run() {
  
//   try {
//     let result = await checkNumber3(33);
//     console.log(result);
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// run()

// task 2
// Delay + Flow Control

// 👉 Ek function banao:

// 🧾 delay(ms)
// Promise return kare
// given time ke baad resolve kare



// function time (ms){

//   return new Promise((resolve , reject) =>{
//     setTimeout(resolve , ms)
//   })
// }

// task 2 


// async function soll () {
  

//   console.log("A")

//   await time(2000)
//   console.log("B")

//   await time(1000)
//   console.log("C")
// }

// soll()


// function time(ms){

//   return new Promise((resolve , rejject )=>{

//     setTimeout(resolve , ms);
//   })
// }

// async function run (){
//   console.log("A")

//   await time (1000)
//   console.log("B")

//   await time(2000)
//   console.log("C")
// }

// run()




// 🚀 TASK 4 — Chain (Important 🔥)

// 👉 Promise chaining likho:

// Flow:

// "Order placed"
// "Cooking started"
// "Food ready"
// "Delivered"

// 👉 Har step me delay use karo

// function time(ms) {
  

//   return new Promise((resolve , reject )=>{

//     setTimeout(resolve , ms);
//   })
// }

// async function orderPlaced(){
//   await time(1000)
//   console.log("orser is placed")
// }


// async function cookingStarted(){
//   await time(2000)
//   console.log("cooking has started")
// }


// async function foodReady() {
//   await time(3000)
//   console.log("food is ready ")
// }

// async function delivered() {
//   await time(1000)

//   console.log("food is delivered enjoy your meal")
// }


// orderPlaced().then(()=> cookingStarted())
// .then(()=> foodReady())
// .then(()=> delivered())
// .catch((err) => console.log(err))




// 🚀 TASK 6 — Parallel Execution (IMPORTANT 🔥)


// await task1()
// await task2()

// 👉 Ab parallel kar:

// 🧾 Requirement:
// 3 functions banao:
// getUser()
// getOrders()
// getPayments()
// Har ek me delay use karo (different times)


// function delay (ms){

//   return new Promise((resolve , reject) =>{

//     setTimeout(resolve , ms)
//   })
// }


// async function getUSe() {
  

//   await delay(1011)

//   console.log("user data retrieved");
//   return user ;
// }

// async function getOrder() {
  

//   await delay(2000)

//   console.log("orderd information recieved")
// }

// async function getPAyment(){

//   await delay(3000)

//   console.log("payment info recieved")
// }



// async function runparaller() {
  

//   console.log("started")
//    let result = await Promise.all(
//     [getUser(),
//       getOrder(),
//       getPAyment()
//     ]
//    )

//    console.log("All done" , result)
// }




// TAsk 6
// runparaller()

// function delay (ms){

//   return new Promise((resolve , reject ) =>{
//     setTimeout(resolve , ms)
//   })


// }

// async function getUser(){

//   await delay(1000)

//   console.log("user data recieved")

//   return "user data"
// }
// async function getOrders() {
  

//   await delay(2000)

//   console.log("order data recieved")

//   return" order data "
// }


// async function getPayment() {
  

//   await delay(3000)

//   console.log("payment data recieved")

//   return " paymet data"
// }


// async function reunParaller(){

//   console.log("started")

//   let result = await Promise.all(
//     [getUser(),
//       getOrders(),
//       getPayment()
//     ])
//     console.log("all dine" ,result)
  
// }


// reunParaller()


// task 7

// 🚀 TASK 7 — Race Condition ⚡

// 👉 Same 3 functions use karo

// 🎯 Goal:

// 👉 Jo sabse pehle complete ho → wahi result print karo

// 💡 Hint:
// Promise.race([...])

// delay function
// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }

// // functions
// async function getUser() {
//   await delay(2000);
//   // console.log("User data received");
//   return "User";
// }

// async function getOrders() {
//   await delay(3000);
//   // console.log("Orders data received");
//   return "Orders";
// }

// async function getPayment() {
//   await delay(1000);
//   // console.log("Payment data received");
//   return "Payment";
// }

// // race function
// async function runRace() {
//   console.log("Race started");

//   let result = await Promise.race([
//     getUser(),
//     getOrders(),
//     getPayment()
//   ]);

//   console.log("Winner:", result);
// }

// runRace();


function fetchData(){

  return new Promise((resolve , reject ) =>{
    setTimeout(()=>{
      
      if(success){
        console.log("Api success")

        resolve("success")
      }

      else{

        console.log("Api failed")
        reject ("failed")
      }
    } ), 3223
  })

}

async function fetchWithRetry(retries){


  for( let i = 0 ; i < retries ; i++){

    try{
      console.log(`Attempt ${i}`);

      let result = await fetchData();
      return reslut ;
    }

    catch (error){
      console.log(`Retrying ...`)
    }
  } 
}

async function  main() {
  console.log("less satrt if it wroks")

  try{
    let result = await fetchWithRetry(3);
    console.log("Final result" , result)
  }

  catch(error){
    console.log("All attempts failed" , error)
  }
}

main()
