let bankSbi={
    bankName:'SBI',
    branch:'Wakad',
    location:'Pune',
    State:'Maharashtra'
    
}
let banklocation={
    street:'jawaharlaal neharu road',
    city:'Mumbai',
    pincode:'413211'
}
let bankdetails=Object.assign({},bankSbi,banklocation);

console.log('Sbi bank details using object.assign method: ',bankdetails);

let rateOfinterest={
    homeLoanInterest:12,
    personalLoanInterest:'10',
    duelInterest:5
}
let sbiDetails=Object.assign({},bankdetails,rateOfinterest);
console.log(`Sbi bank details with rate of interest and address ${sbiDetails.bankName}, ${sbiDetails.branch}, ${sbiDetails.city}`);
for (const value in sbiDetails) {
    console.log(`${value}`);
}