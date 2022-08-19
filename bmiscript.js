function BMI() {
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmio=(bmi.toFixed(2));
    

    document.getElementById("result").innerHTML="Your BMI is " + bmio;
    if (bmio>22.5){
                    
    document.getElementById("remark").innerHTML="You are overweight";
                }
    else if(bmio<18.5){
                    document.getElementById("remark").innerHTML="You are underweight";
                }
    else {
        document.getElementById("remark").innerHTML="You are HEALTHY!!";
    }
}