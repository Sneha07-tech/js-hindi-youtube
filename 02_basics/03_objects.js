// object literals
const mySym=Symbol("key1")
const jsuser={
    name:"hitesh",
    age:18,
    [mySym]:"mykey1",
    location:"jaipur",
    email:"hitedh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Satuurday"]

}
console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mySym])
jsuser.email="hitesh@chatcpt.com"
// Object.freeze(jsuser)
jsuser.email="hitesh@microsoft.com"
console.log(jsuser);
jsuser.greeting=function(){
     console.log("hello js user");

}
jsuser.greetingTwo=function(){
     console.log(`hello Js user,${this.name}`);

}
console.log(jsuser.greetingTwo())
console.log(jsuser.greeting())

