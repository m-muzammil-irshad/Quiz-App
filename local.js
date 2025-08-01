let score = 0;
const call =()=>{
score+=1;
localStorage.setItem("username",score);
let user = localStorage.getItem("username");
console.log(user);

}
call();
