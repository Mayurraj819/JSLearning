console.log(`number printed for 5 to 15`);
for (let index = 5; index <= 15; index++) {   
    console.log(index);
}

console.log(`Numbers from 50 to 40`);
for (let index = 50; index > 39; index--) {
 console.log(index);
    
}
 var count=1;
console.log('first 15 odd numbers are');
for (let index = 1; index < 100; index++) {
    if(index%2!=0){
        console.log(count,' :',index);
        count++;
        if(count==16){
            break;
        }
    }
    
}
count=1;
console.log('first 10 Even numbers are');
for (let index = 1; index < 100; index++) {
    if(index%2==0){
        console.log(count,' :',index);
        count++;
        if(count==11){
            break;
        }
    }   
}
console.log(`the table of 5`);
for (let index = 1; index <= 10; index++) {
  console.log(5*index);
}
console.log(`Table of 10`);
for (let index = 1; index < 11; index++) {
 console.log(10*index);
    
}
console.log('reverse table of 10');
for (let index = 10; index > 0; index--) {

    console.log(10*index);
}