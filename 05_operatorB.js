var greaterNumber=function(N1,N2){
var result=N1>N2 ? N1:N2;
console.log(`${N1} and ${N2} greater value is ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);
console.log('------------------');
var isEvenOrOddNum=function(num){
var result=num%2==0;
console.log(' variable',num,'is Even ',result);

}
isEvenOrOddNum(29);
isEvenOrOddNum(44);
isEvenOrOddNum(0);
isEvenOrOddNum(101);
console.log('------------------');
var wordLength=function(str){
var result=str.length;
result=result%2==0 ? "Even":"Odd";
console.log(`string=${str} length is ${str.length} its ${result}`);
}
wordLength("JavvaScript");
wordLength("developer");
wordLength("Google");