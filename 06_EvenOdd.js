function EvenOdd(N1){
    if(N1%2===0){
        console.log(`the number ${N1} is Even`);
    }
    else{ console.log(`the number ${N1} is Odd`);}
    console.log('-----------');
}
console.log('Even Odd check');
EvenOdd(45);
EvenOdd(70);
EvenOdd(67);
EvenOdd(98);

function charcount(str){
    if(str.length>10){
        console.log(`the charecter '${str}' more than 10 charecter`);
    }
    
    if(str.includes('Java')){
        console.log('this string includes Java');
    }
    else{
        console.log('NOt found word java');
    }
}
charcount('JavaScipt-ES6');
charcount('Gittu');


