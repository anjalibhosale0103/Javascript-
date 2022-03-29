function calc(num1,num2,operator)
{
    switch(operator)
    {
        case"+":
        document.write("Addtion of:",num1,"and ",num2,"=",num1+num2);
        break;
        case"-":
        document.write("Subtraction of:",num1,"and ",num2,"=",num1-num2);
        break;
        case"*":
        document.write("Multiplication of:",num1,"and ",num2,"=",num1*num2);
        break;
        case"/":
        document.write("Division is:",num1,"and ",num2,"=",num1/num2);
        break;
        case"%":
        document.write("Remainder is:",num1,"and ",num2,"=",num1%num2);
        break;
        case"**":
        document.write(num2,"Power of",num1,"is",num1**num2);
        break;
    default:
        document.write("Invalid Operator");
    }

}
calc(20,10,"+")