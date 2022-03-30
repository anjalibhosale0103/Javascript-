function discount()
{
    var disc;
    var a=document.getElementById("amount").value;
    if(a>0 && a<1000){
    document.write("You have not got any discount!!!");
    document.write("<br>");
    document.write("Total amount to be paid is:",a);
    }
    else if(a>1000 && a<3000){
    document.write("You have got 15% discount!!!");
    document.write("<br>");
    var disc=(parseInt(a)*15)/100;
    a=a-disc;
    document.write("Total amount to be paid is:",a);
    }
    else if (a>=3000 && a<5000){
    document.write("You have got 25% discount!!!");
    document.write("<br>");
    var disc=(parseInt(a)*25)/100;
    a=a-disc;
    document.write("Total amount to be paid is:",a);
    }
    else if (a>=5000)
    {
    document.write("You have got 30% discount!!!");
    document.write("<br>");
    var disc=(parseInt(a)*30)/100;
    a=a-disc;
    document.write("Total amount to be paid is:",a);
    }
}
