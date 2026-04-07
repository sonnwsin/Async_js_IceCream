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


let order = ( time , work)=>{


    return new Promise((resolve , reject)={
        if(is_shop_open){

            setTimeout(()=>{

            } , 2000)
            resolve(work());
        }
        else{
            reject(console.log(`didnt work shop was closed`))
        }
    })
}