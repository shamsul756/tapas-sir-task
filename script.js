
// ## 5. Create an Electricity Bill Calculator
// Let's calculate how much you pay as electricity bil per month and annually?

// - [ ] Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
// - [ ] If each day you consume the `units` and each unit cost 150 rupees, how much will you be chnarged per month?
// - If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?

let unitsPerDay = 150;
let unitsPerUnit = 150;
let monthBill = (unitsPerDay * unitsPerUnit)*30;
let annualGross = monthBill * 12;
let discount = (annualGross * 20) /100;
let tap =  annualGross - discount;
console.log(tap);