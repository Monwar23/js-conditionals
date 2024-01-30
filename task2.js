let weight=52;
let height=1.67;
let BMI=weight/(height*height);
if(BMI<18.5){
    console.log('you are underweight')
}
else if(BMI>=18.5){
    if(BMI<=24.9){
        console.log('you are normal');
    }
    else if(BMI>=25){
        if(BMI<=29.9){
            console.log('you are overweight')
        }
    }
}
else{
    console.log('you are obese');
}