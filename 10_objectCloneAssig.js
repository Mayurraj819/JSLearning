const personalDetails={
    Fname:'Mayursingh',
    Lname:'Rajput',
    age:28,
    Education:'BE Mechanical'
}
const collegeDetails={
    Place:'Malkapur',
    CollageName:'dr. V. B. Kolte Engg',
    Degree:'BE Mechanical'
}
const Details=Object.assign(personalDetails,collegeDetails)
console.log('My personal details: ',Details);

const frndslist=['Sam','Kiran','Rohit','Yogi'];
Object.freeze(frndslist);
console.log('with frizz operator',frndslist);
for (const iterator of frndslist) {
    console.log(iterator);
}
const frndslist1=['Sam','Kiran','Rohit','Yogi'];
frndslist1.push('Ravina');
console.log(frndslist1);

let str='Codemind Technology';
const str1=str.split(" ");
console.log(str1);
let newstr=str1[0]+" "+[...str1[1]].reverse().join('');
console.log(newstr);


