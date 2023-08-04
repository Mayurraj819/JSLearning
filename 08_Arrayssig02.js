const arrayNumbers=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`Array list: ${arrayNumbers}`);
console.log(`Array length is ${arrayNumbers.length}`);
console.log(`the third last element of array: ${arrayNumbers[arrayNumbers.length-3]}`);
console.log('even numbers from the array');
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(element%2==0){
        console.log(element);
    }
    
}
console.log('Odd numbers from the array');
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(element%2!=0){
        console.log(element);
    }
}
let element=0;
console.log('even positioned elements');
for (let index = 0; index < arrayNumbers.length; index=index+2) {
    const temp = arrayNumbers[index];
    console.log(temp);
    element=element+temp;
    
}
console.log('total:',element);
 element=0;
console.log('Odd positioned elements');
for (let index = 1; index < arrayNumbers.length; index=index+2) {
    const temp = arrayNumbers[index];
    console.log(temp);
    element=element+temp;
    
}
console.log('total:',element);
console.log('sum of all elements from arraynumber');
element=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const temp = arrayNumbers[index];

    element=element+temp;
}
console.log(`sum of arrayNumbers: ${element}`);

console.log(`Multiple of 5 from array number`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(element%5==0){
        console.log(element);
    }
    
}
let variable=0;
let isavailable=0;
console.log(`is number available`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if(115==element){
        variable++;
    } 
   if(23==element){
        isavailable++;
    }
   
}
if(variable>0){
    console.log(`115 is available true.`); 
}
if(isavailable>0){

console.log(`23 is available false.`);

}
console.log('two number 55 66 before index 3');
arrayNumbers.splice(3,0,55,66);
console.log(arrayNumbers);
console.log(`delete 3 elements from index 4`);
arrayNumbers.splice(4,3);
console.log(arrayNumbers);