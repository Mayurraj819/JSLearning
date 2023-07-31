var gradCalculation=function(marks){
    var result=typeof marks;
    if(marks<=0||marks>100||result === "string"||result=="undefined"){
        console.log(`Plese provid the valid marks`);
    }else{
    if(marks>=90){
        console.log(`Fantastic marks:${marks}. your grad is A+`);
    }
    else if(marks>=75&&marks<90){
console.log(`Excellent Marks ${marks} your grade is A`);
    }
    else if(marks>=50 && marks<75){
        console.log(`Good Marks ${marks} your grade is B`);
       
    }
    else if(marks>=35 && marks<50){
        console.log(`Marks is ${marks}. You grade is C. Need imporovement`);
    }
    
}
}
gradCalculation(98);
console.log('1');
gradCalculation(80);
console.log('2');
gradCalculation(90);
console.log('3');
gradCalculation(0);
console.log('4');
gradCalculation(150);
console.log('5');
gradCalculation(-7);
console.log('6');
gradCalculation(35);
console.log('7');
gradCalculation(39);
console.log('8');
gradCalculation(64);
console.log('9');
gradCalculation(49);
console.log('10');
gradCalculation(91);
console.log('11');
gradCalculation("Eighty");
console.log('12');
gradCalculation(undefined);
console.log('13');
gradCalculation(null);