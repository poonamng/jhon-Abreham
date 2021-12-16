var readlineSync=require("readline-sync");
var score=0;
function anqu(question,answer){
  var userAnswer=readlineSync.question(question);
  if (userAnswer===answer){ 
    console.log("you are right !");
    score+=1;
  }else{
    console.log("you are wrong !");
    score-=1
  }
}
anqu("who is Jhon Abraham ? ", "indian actor")
anqu("whare does he live ?","mumbai")
anqu("which movie is upcoming to him ?", "ek villain 2")
console.log(" your score is",score) 