//1
const myTimeout = setTimeout(myGreeting, 3000);
function myGreeting() {
console.log("Happy Birthday!")
}

//2
let x = "Happy Birthday"
let y = "to you"
setTimeout(function(){ console.log(x) }, 2000);
setTimeout(function(){ console.log(y) }, 4000);

//3
let x2 = "Happy Birthday"
let y2 = "to you"
setTimeout(()=> console.log(x2) , 2000);
setTimeout(()=> console.log(y2) , 4000);


/* outout :
Happy Birthday
Happy Birthday
Happy Birthday!
to you
to you

*/