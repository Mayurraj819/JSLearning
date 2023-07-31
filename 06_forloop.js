console.log(`---------------------------`);
// 7 table
for (let index = 7; index <=70 ; index=index+7) {
    console.log(index);  
}
console.log(`First 5 odd numbers`);
// First 5 odd numbers
for (let index = 1; index <10 ; index=index+2) {
    console.log(index); 
}

console.log(`First 15 even numbers`);
// First 15 even number
for (let index = 0; index <30 ; index=index+2) {
    console.log(index); 
}
console.log(`------- while loop ---------`);
// Numbers from 1 to 10
var i = 1;
while (i<=10) {
    console.log(i);
    i++;
}

for (let index = 0; index < 10; index++) {
    console.log(`Iteration Start`);
    if (index==5) {
        break;
    }
    console.log(`Value is ${index}, Iteration ${index+1}`);
    console.log(`Iteration End`);
    console.log(`--------------------------`);
}

console.log(`-------- continue -----------`);
for (let index = 0; index < 5; index++) {
    console.log(`Iteration Start`);
    if (index==3) {
        continue;
    }
    console.log(`Value is ${index}, Iteration ${index+1}`);
    console.log(`Iteration End`);
    console.log(`--------------------------`);
}