let sbiBank={
    bankName:'State bank of india',
    location:'Pune',
    accountNo:'1234567789',
    ifsc:'SBIN012345',
    interestRate:'5%',
    ShowDetails:function(){
    console.log(`Bank details:=>  ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
}
let axisBank={
    bankName:'Axis bank',
    location:'Pune',
    accountNo:'12355567789',
    ifsc:'AXIS012345',
    interestRate:'5%',
    ShowDetails:function(){
    console.log(`Bank details:=>  ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
}
let hdfcBank={
    bankName:'HDFC bank',
    location:'Mumbai',
    accountNo:'2244667789',
    ifsc:'HDFC012345',
    interestRate:'5%',
    ShowDetails:function(){
    console.log(`Bank details:=>  ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}`);
    }
}
let yesBank={
    bankName:'Yes Bank of India',
    location:'Malkapur',
    accountNo:'0000002342',
    ifsc:'YES012345',
    interestRate:'15%',
    ShowDetails:function(){
    console.log(`Bank details:=>  ${this.bankName},${this.location},${this.accountNo},${this.ifsc},${this.interestRate}    `);
    }
}
sbiBank.ShowDetails();
console.log(`*****----------*******`);
hdfcBank.ShowDetails();
console.log(`*****----------*******`);
axisBank.ShowDetails();
console.log(`*****----------*******`);
yesBank.ShowDetails();