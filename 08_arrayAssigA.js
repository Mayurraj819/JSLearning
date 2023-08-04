const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`array of fruits: ${arrayFruits}`);
let element=arrayFruits[0];
console.log('first element of array',element);
element=arrayFruits[arrayFruits.length-1];
console.log('Last element of array',element);
arrayFruits.unshift("Papaya");
console.log('Added Papaya in the array',arrayFruits);
arrayFruits.splice(4,1);
console.log(arrayFruits);
arrayFruits.splice(4,0,"Dragon Fruit");//added dragon fruit before watermelon
console.log(arrayFruits);
arrayFruits.splice(2,1,"Kiwi");//replace orange with kiwi
console.log(arrayFruits);
for (let index = 0; index < arrayFruits.length; index++) {
    const element = arrayFruits[index];
    console.log(element);
    
}
let count=1;
for (let index = arrayFruits.length-1; index > 0; index--) {
    const eleme = arrayFruits[index];
    console.log(eleme);

if(count==3){
break;  

}
count++;
}
