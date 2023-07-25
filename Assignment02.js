console.log('-------------Step 1----------');
function personalDetails(firstName,lastName,collegeName)
{
console.log('firstName:',firstName,' lastName:',lastName,'  collegName',collegeName);
}
personalDetails();
console.log('------------------------------------------');
function swapValue(value1,value2){

console.log('Before Swap >> Value1:',value1,'  Value2:',value2);
var temp=value1;
value1=value2;
value2=temp;
console.log('After Swap >> Value1:',value1,'  Value2:',value2);
}
swapValue('Virat','Anushka');
console.log('-----**-----');
swapValue(1000,2000);
console.log('------------------------------------------');
var num=0;
function bankDetails(bankName,accountNum,location,pinCode){
    num=num+1;
    console.log(num,'.','Bank Name:',bankName,'  Account Num:',accountNum,' location:',location,' Pincode:',pinCode);

}
bankDetails(1,2,3,4);
bankDetails(2,3,4,5);
bankDetails(3,4,5,5);