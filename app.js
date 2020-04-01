/*  let string = "I am a string"; 
let sentence = "Hello Angel " + "and Vicky";
let combine = string + sentence; 

let student = "Sandra";
let student2 = "Gia";
let courseName = "AP CSP";
let teacherName = "Whalen";
let sentence = 
    student +
     " and " + 
     student2 + 
     " are taking " +
    courseName + 
      " with " +
    teacherName;

let betterSentence =  `${student} and ${student2}
are taking  ${courseName} with ${teacherName} next year`;
*/

//////////Numbers and Intergers

/* let year = 2020;
let nextYear = year +1;
let past = 2020 / 2;
let future = year * 2;
 */

 ////////////////Booleums

 //let trueStatement =  false;

 ////////Null and Undefined

 //let richard;
 //console.log(richard);
 //console.log(jaiyu);

 /////////Booleom Logic or if/else

 //let age = 18;
 //let baoSquared  =  "Bao Bao";
 //console.log(baoSquared === "bao Bao");
 ///console.log(age == "17");

/* let age = 17;
if (age <18){
    console.log("You are a child");
} else if (age == 18){
    console.log ("Happy Birthday");
} else{
    console.log("You are over 18");
}

////red,green, yellow
let light  = "green"
if(light === "green"){
    console.log("Go");
}else if (light === "Yellow"){
    console.log("Caution!");
}else {
    console.log("Stop");
}
 */
/* 
let kristyIntolerant = true;
let baoBaoIntolerant = false;
if(kristyIntolerant === true && baoBaoIntolerant === true){
    console.log ("Get Almond Milk");
}else if (baoBaoIntolerant === true || baoBaoIntolerant === true){
    console.log ("Get both Milks");
}else{
    console.log("Just regular Milk");
}

let temperature = 67;
if (temperature < 68){
    console.log("Too cold");
}else if (temperature >= 68 && temperature <=72){
    console.log("Perfect");
}else if (temperature > 72 && temperature <=76){
    console.log("Warm");
}else{
    console.log ("Too hot");
} */

/* function test(){
    console.log("I'm a function");
}

test();
 */

/*  const add = function(x,y) {
    return x + y; ///return ends the function
 };

console.log(add(100,20));
const name = "Richard"; /////cannot re-define const
 */
/* 
 const hello = function(){
     console.log("Hello")
 };
 const bye = function(){
    console.log("Bye")
};
const hiBye = function(){
    hello();
    bye();
    hello();
    bye();
};
hiBye(); */

//const name = "Thurushi"; //golbal variabe or global space

/* function displayName(){
    const name = "Kelly"; //local or function scope
    function sun(){
        console.log(name); //inner function has access to outer function
    }
    return sun;
}

const myFunc = displayName();
myFunc();
//closure */

////////Arrays

/* const names = ["Aarthi", "Vicky", "Vincent", "Doyle", "Kelly"];
names.forEach(name => console.log(name));
 */

 ////spread operator

/*  const numbers = [1,2,3,4,5,6];
 const add = function(x,y,z,a,b,c){
     return x + y + z + a + b + c;
 };
  console.log(add(...numbers)) */

let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa", "Richard"];
let result = students.filter(student => student.length > 4)
//console.log(result);


///filter out all students whose names contain less than 5 characters
/* const newArr = students
    .push()
    .forEach()
    .map(); */

////"includes" junshen

console.log(students.includes("Junshen"));
console.log(students.includes("at"));


///Alan or Sava included in "some"
function check(array, value){
    return array.some(student => student === value)
}

const checkSavva = check("Savva", students);
const checkAlan = check("Alan", students);

console.log(checkAlan +  checkSava);
