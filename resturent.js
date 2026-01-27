const age = 62;
const price = 1200;

if(age <10) {
    console.log('you can eat for free');
}

else if(age < 18) {
    const discount = price * 25 / 100;
    const paybill = price - discount;
    console.log(paybill)
}
else if(age >= 60) {
    const discount = price * 50 / 100;
    const paybill = price - discount;
    console.log(paybill)
}

else {
    console.log(price)
}