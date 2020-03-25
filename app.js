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
}