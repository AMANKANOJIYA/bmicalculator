/* BMI Calculator function*/
function bmicalc(weight,height)
{
    var bmi=weight/(height*height);
    return Math.round(bmi);
}

/* Accept input variables*/
var w=prompt("Enter Your Weight : ");
var h=prompt("Enter Your Height : ");

/* Performing calculations */	
var bmi = bmicalc(w,h);

/* Interpretation of BMI value */
if(bmi<18.5)
{
    yourbmi="Underweight";
}
else if(bmi>18.5 && bmi<25)
{
    yourbmi= "Normal";
}
else
{
    yourbmi="Overweight";
}
/*out put through Alert*/
alert("Hello, your BMI is "+bmi+" it's "+yourbmi);
