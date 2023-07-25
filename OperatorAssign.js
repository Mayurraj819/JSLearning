var squareOfWordLength=function(string1){

    var result=string1.length;
    result=result*result;
    return result;
}
var Square=squareOfWordLength("JavaScript");
console.log(`the legth squre of "JavaScript" is ${Square}`);
Square=squareOfWordLength("Google Chrome");
console.log(`the legth squre of "Google Chrome" is ${Square}`);
Square=squareOfWordLength("Developer Smart");
console.log(`the legth squre of "Developer Smart" is ${Square}`);

function NoreturValue(){
    var str="I am Angular Developer";
    var countLenght=str.length;
    str=str.split(" ");
var countLenght2=str.length;
var result=countLenght/countLenght2;
console.log(`the length of string= ${countLenght} and Charecter are ${countLenght2}`);
console.log(`dividation result=${result}`);
console.log(`Multiplication result=${countLenght*countLenght2}`);
    console.log(``)
}
NoreturValue();