// Let's check if you are elligible to get a driving license. The eligibility to get a driving licence is 18 years.

// - [ ] Manage `age` as a variable.
// - [ ] Check if the age is elligible for a driving license and print it on the console accordingly.
let age = 20;
if(age >= 18){
    console.log('you are eligible for license');
}
else{
    console.log('you are not eligible for license');
}
// Let's calculate how much do you earn from your office.

// - [ ] You get 12,300 rupees as your monthly salary.
// - [ ] You get a 20% bonus on your annual salary.
// - [ ] How much money do you make per annum as a CTC?

let monthlySalary = 12300;
let bonusPercentage = 20;

let annualBase = monthlySalary * 12;
let bonusAmount = annualBase * bonusPercentage / 100;
let ctc = annualBase + bonusAmount;
console.log('pocket amount :', ctc);