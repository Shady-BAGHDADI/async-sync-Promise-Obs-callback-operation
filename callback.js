
//Programe principale : synchrone
console.log("Before");

getUser(1,
    //function(user){//code...}
    (user)=>{
        
        console.log("user :",user);
        
        getRepositories(user.gitHubUserName,(repo)=>{

            console.log('repo',repo);
        })

},
   
    
    );


console.log("After");


//function..asynchrone : tasl for the future

function getUser(id,callback){

    setTimeout(()=>{
    console.log("reading a user from a database...");
    callback({id:id,gitHubUserName:'chadi '}) //3awthet return..

    },2000)
    //return 1 ;
}


function getRepositories(username,callback){

    setTimeout(()=>{
        callback (['repo1','repo2','repo3'])
    },2000)
    

}

//how get result from asynchrone code !!! => callbach,promises,observable.. =>Patterns
//callbach : parametre yetzed lil function yjib result de function when it is ready
