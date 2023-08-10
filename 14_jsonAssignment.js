let jsonEmployeeInfo = `{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age":"23",
    "dob":"11-12-2019",
    "married":"false",
    "address":{
                "street":"32,Laham st.",
                "city":"Innsbruck",
                "country":"Austria"
                },
"referred-by":"E0012"
}`
const Emp= JSON.parse(jsonEmployeeInfo);
console.log(Emp);
console.log(`log role=> ${Emp.role[0]}`);
let str=Emp.name;
let splitstr=str.split(" ");
console.log('only updated the last name:',splitstr[1]);
let date=new Date(Emp.dob);
console.log('only logging full year from ',Emp.dob,' year=>',date.getFullYear());



