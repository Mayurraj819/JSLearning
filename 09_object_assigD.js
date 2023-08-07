let professor={
    Fname:'Raj',
    Lname:'Sharma',
    salary:'20000',
    Age:'34',
    department:'Hindi',
    degrees:{
        engineering:'CSC,',
        PHD:'Adv Computing'
    },
    certificates:['Hacker Rank Participation','Certificate in IFE course','Certificate in Adv Programming'],
   ConcatDegrees: function(str1,str2){
      str1= str1.concat(str2);
return str1;
   }
}
let degees=professor.ConcatDegrees(professor.degrees.engineering,professor.degrees.PHD);
console.log(`Teacher degreees are: ${degees}`);
professor.totalExperienc="14 years";
console.log(professor.totalExperienc);
professor.certificates.push('Oracle Certified');
console.log(`last element of array:    [ ${professor.certificates} ] =>${professor.certificates[professor.certificates.length-1]}`);