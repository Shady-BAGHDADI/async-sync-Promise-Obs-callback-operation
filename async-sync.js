
//

//Programe principale : synchrone
console.log("Before");

const user =getUser(1);

console.log("user :",user);
console.log("After");


//function..asynchrone : task for the future..take some time to store in db--get data from db..timer..ect
//result of asynchrone function will be ready in the future 
function getUser(id){

    setTimeout(()=>{
    console.log("reading a user from a database...");
    return {id:id,msg:'my name is chadi :) '}

    },2000)
    //return 1 ;
}

//how get result from asynchrone code !!! => callbach,promises,observable.. =>Patterns
//callbach : parametre yetzed lil function yjib result de function when it is ready
