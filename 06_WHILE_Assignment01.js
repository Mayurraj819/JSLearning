console.log('Print numbers from 5 to 15');
var index=5
while (index<=15) {
    console.log(index);
    index++;
}
console.log('Print numbers from 50 to 40');
var index=50
while (index>=40) {
    console.log(index);
    index--;
}
console.log('Print 1st 15 odd numbers');
var index=0;
var count=1;
while (count<=15) {

    index++;
    if(index%2!=0){
        console.log(count,':',index);
        count++;
    }
}
console.log('Print 1st 10 even numbers');
var index=0;
var count=1;
while (count<=10) {

    index++;
    if(index%2==0){
        console.log(count,':',index);
        count++;
    }
}
console.log('Table of 5');
var index=1;

while (index<=10) {
        console.log(index*5);   
        index++;     
}

console.log('table of 10');
index=1;
while (index<=10) {
    console.log(index*10);
    index++;
}
console.log('Reverse table of 10');
index=10;
while (index>=1) {
    console.log(index*10);
    index--;
}
