var tcsEligibility= function(gradScore,hscScore,sscScore,candidateName){
    var result=gradScore>=70||hscScore>=80||sscScore>=90 ? "You are eligible":"You are not eligible";
    console.log(`Candidate Name:${candidateName} Graduation Score: ${gradScore} HSC Score: ${hscScore} SSC Score:${sscScore} `);
    console.log(`Eligibility : ${result}`)
    console.log(`-----------------`);
}
tcsEligibility(80,86,90,"Mayur");
tcsEligibility(70,65,55,"Yogiraj");
tcsEligibility(60,79,88,"Sushant");