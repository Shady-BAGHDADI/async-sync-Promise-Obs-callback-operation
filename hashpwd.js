//npm i bcrypt
const bcrypt = require("bcrypt")

//to hash pwd i need a salt..3la 5ater ken pwd =1234 =>abcd l hacker ye3ref innou abcd t9abelha 1234

//so salt : random string added befor or after the pwd

async function run(){
    const salt = await bcrypt.genSalt(10);
    console.log("salt :",salt);

    const hashedpwd = await bcrypt.hash('1234',salt)
    console.log("hashedpwd :",hashedpwd);
}

run()
