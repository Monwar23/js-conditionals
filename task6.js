let age = 15;
let students=true;
let price=800;

if(age<10){
    console.log('free');
}

else if(students){
    price=price *(50/100);
    console.log(price)
}
else if(age>=60){
    price=price*(15/100);
    console.log(price)
}
else{
    console.log(price)
}