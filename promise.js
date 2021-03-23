//Promise : object..give the result of asyncrone operation ..ye7mel (holds) natijet event asynchrone (succes--fail)
//when the asynchrone operation complete  return value or err


//CREATION 
const p = new Promise((resolve,reject)=>{
    //async code : call api..data from bd..timer ect !!!

    //when async work complete => value or err 
    
    //: send the result of async operation to the consumer of this promis object => resolve(result of async code) or reject(result of async code)

     //resolve(1);
     reject(new Error('message')) //err 3indo properite esmha message

})

//CONSOMATION

//!!! now consume this promise :  result fiha l 1 .
p
.then((result)=>{
    console.log("result :",result);
})
.catch(err=>{
    console.log('ERROR :',err.message);
})


