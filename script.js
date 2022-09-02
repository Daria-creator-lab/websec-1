function whenButtonClicked()
{
    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;
    let selectAction = document.getElementById("select").value;
    let result = 0;

    if(isNaN (value1)){

        /*console.log(value1, "Incorrect input");
        value1 = "Incorrect input"
        document.getElementById("input1").style.color = "#FF0000";
        return;*/
    }
    else
        value1 = parseFloat(value1)
      
    
    value2 = parseFloat(value2);

    console.log(value1,value2,selectAction);

    switch (selectAction){
        case "plus":
            result = value1 + value2;
            break
        case "minus":
            result = value1 - value2;
            break 
        case "mult":
            result = value1 * value2;
            break
        case "div":
            if (value2 == 0)
            {
                console.log(value2, "Division by zero");
                result = "Division by zero"
            }
            else 
                result = value1 / value2;
            break                
    }
    


    document.getElementById("results").innerText = result;
}

function changesCheck(fieldName){
    console.log(fieldName);

    let value1 = document.getElementById(fieldName).value;
    
    document.getElementById(fieldName).style.color = (isNaN (value1) ?  "#FF0000" : "#000000");

}