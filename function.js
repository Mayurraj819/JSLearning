var num1=100;
var num2=200;
swap(num1,num2);
function swap(n1,n2){
    var temp=n1;
    console.log('Before swap==>N1', n1, " N2 ",n2);
    n1=n2;
    n2=temp;
    console.log('After swap==>N1', n1, " N2 ",n2);   
}

var name1="Mayur";
var name2="ABCD";
swap(name1,name2);