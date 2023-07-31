console.log('-----Male eligibility for marriage----------');
var maleMarriageEligibility=function(boyName,age,gender){
var result=age>=21 && gender==='Male' ? "You are eligible for Marriage":"Not eligible for Marriage";
console.log(`hey ${boyName} (age:${age}) ${result}`);
console.log('');

}
maleMarriageEligibility('Billagates',25,'Male');
maleMarriageEligibility('Stew Jobs',17,'Male');

console.log('--------Female eligibility for marriage-------');
var femaleMarriageEligibility= function(gender,age,girlName){
var result=age>=18 && gender==='Female' ? "You are eligible for Marriage":"Not eligible for Marriage";
console.log(`hey ${girlName} (age:${age}) ${result}`);
console.log('');
}
femaleMarriageEligibility('Female',16,'jenifer');
femaleMarriageEligibility('Female',27,'Malinda Gates');
