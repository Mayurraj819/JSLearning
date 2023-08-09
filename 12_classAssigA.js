class Vehicle{

    constructor(color,modal,price,engine,iselectric){
        this.color=color;
        this.engine=engine;
        this.iselectric=iselectric;
        this.modal=modal;
        this.price=price;
    }
}
let MarutiVan=new Vehicle('red','Maruti','123444','4 stroke',false);
let SuzukiVan=new Vehicle('black','suzuki','20000','4 stroke',false);
let EleMarutiVan=new Vehicle('White','Maruti','500000','4 stroke',true);
let dustarVan=new Vehicle('skyblue','duster','1100000','2 stroke',true);
let TATAVan=new Vehicle('Yellow','Nano','10000','4 stroke',false);

let VanArray=[MarutiVan,SuzukiVan,EleMarutiVan,dustarVan,TATAVan];
for (const van of VanArray) {
    console.log(`Car Details Color:${van.color}, Model:${van.modal}, Price:${van.price} , Engine:${van.engine}, IsElectric:${van.iselectric} `); 
    
}

console.log('Step 2 create collage ');
class Collage{
    constructor(clgName,clglocation,clgTeacherCount,IsPrivate,clgfees){
        this.clgName=clgName,
        this.clglocation=clglocation,
        this.clgTeacherCount=clgTeacherCount,
        this.IsPrivate=IsPrivate,
        this.clgfees=clgfees
    }
}
let PuneClg=new Collage('Coep','Pune',12,true,120000);
let PuneClg1=new Collage('Singad','Pune',30,true,23333);
let PuneClg2=new Collage('IIT','Pune',50,false,70000);
let MumbaiClg=new Collage('UmaBharti','Mumbai',11,true,80000);
let DelhiClg=new Collage('Jaybharti','Delhi',40,true,900000);
let clgArray=[PuneClg,PuneClg1,PuneClg2,MumbaiClg,DelhiClg];
for (const clg of clgArray) {
    traverseObj(clg);
console.log('=============***==================')

}

function traverseObj(obj){
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const element = obj[key];
        console.log(`Key:${key}  Value:${element}`);
    }
}
}

function isPrimeNumber(num){
    if(num%1==0&&num!=1&& num!=0&&num>0){
        console.log(`${num} is prime number`);

    }

}
isPrimeNumber(-2);