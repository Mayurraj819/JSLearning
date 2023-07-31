var voteEligible= function (Age){
if(Age<=0||Age>130||typeof Age=="undefined"||typeof Age=="null"){
    console.log('inavlid data');
}
else{
    if(Age>18)
    console.log(`age:${Age} Eligible for vote.`);
    else
    console.log(`age:${Age} not eligible for vote`);
}
}

voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);
