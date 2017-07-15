/*WHO ARE YOU?
* Create a variable called "name" assign it a value of your name
* Write a conditional statement that prints out "Hi" + name
  if truthy (it is true), otherwise prints out "goodbye"
*/

var name = "tolentino";

function nameTest(){

if(name === "tolentino"){
    return "Hi " + name;
  }else{
    return "goodbye";
  }
}

console.log(nameTest());

/* HIGHER VALUE
* Create a variable called "num1", assign it a value of 10
* Create a variable called 'num2', assign it a value of 5
* Write a conditional statement that compares the two values and
  prints out the higher value.
*/

var num1 = 10;
var num2 = 5;

function compareNum(){
if(num1>num2){
    return num1;
  } else{
    return num2;
  }  
}

console.log(compareNum(num1, num2));

/* AGE CHECKER [Look up logical/comparitive operators]
* Create a variable named "age", assign it your age
* Write the following conditionals:
  * age >= 16 < 18 = print "You are old enough to drive"
  * age >= 18 < 21 = print "You are old enough to vote"
  * age >= 21 = print "You are old enough to rent a car"
  * other = print "Sorry you're to young"
*/

var age = 20;

function ageChecker(){
  if(age >= 16 < 18){
    return "You are old enough to drive";
  } 
//use else ifs when you want to exit out of an attached if statement
  else if(age >= 18 < 21 ){
    return "You are old enough to vote";
  } else if(age >= 21 ){
    return "You are old enough to rent a car";
  } else{
    return "Sorry you're to young";
  }  
}

console.log(ageChecker(age));


/* GRADE CHECKER [Look up logical/comparitive operators]
* Create a variable named "testScore", assign it a value between 0-100
* Write the following conditionals:
  * 50-59 = print "You got an F, try harder"
  * 60-69 = print "You got a D, not good enough"
  * 70-79 = print "You got a C, I think you can do better"
  * 80-89 = print "You got a B, Not to bad"
  * 90-100 = print "You got an A, Your a rockstar"
  * other = print "Sorry we don't have a grade for that score "
*/

var testScore = 59;

function gradeChecker(){
  if(testScore >= 50 && testScore<=59){
    return "You got an F, try harder";
  }
  else if(testScore >= 50 && testScore<=59){
    return "You got a D, not good enough";
  }
  else if(testScore >= 50 && testScore<=59){
    return "You got a C, I think you can do better";
  }
  else if(testScore >= 50 && testScore<=59){

  }
}

console.log(gradeChecker(testScore));
