var num=0;
var squre=function(value){
  num+=1;
var result=value*value;
console.log(`${num}. ${value} squre is ${result}`);

}
squre(5);
squre(6);
squre(25);
squre(100);
squre(67);
squre(89);
squre(59);
console.log(`type of function squre is ${typeof squre}`);
console.log('-----------------------------');
var areaOfRectangle=function(value1, value2){
    var result= value1* value2;
    console.log(`area of rectangle for value1=${value1} and value2=${value2} is --> ${result}`);
}
areaOfRectangle(499,917);
console.log("----------------------------");
var swapValues=function(value1, value2){
var temp=value1;
console.log(`before swap value1 ${value1} and Value2 ${value2}`);
value1=value2;
value2=temp;
console.log(`After swap value1 ${value1} and Value2 ${value2}`);
}
swapValues("Mahi","Raina");
console.log();
swapValues(55,77);
console.log('----------------------');

var stringFun=function(string1){
    var length=string1.length;
    console.log(`charecter in the string"${string1}" is ${length}`);
    var result=string1.charAt(6);
    console.log('charecter at index 6 is ',result);
    console.log('charecter at index 11 is ',string1.charAt(11));
    console.log('charecter at last  is ',string1.charAt(length));
    console.log('charecter at index 6 is ',string1.charAt(0));
    var string2=string1.split(" ");

    console.log('total number of words in the  "',string2,'" are ==>',string2.length);
}
stringFun("JS the most popular language of internet");