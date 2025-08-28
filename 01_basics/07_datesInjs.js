// dates
let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString())
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toTimeString())
let mycreatedDate=new Date(2023,0,23,5,3)
let myCreatedDate=new Date("01-14-2-23")
console.log(mycreatedDate.toLocaleString());
console.log(mycreatedDate.toString())
let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate=new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());
newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDate)