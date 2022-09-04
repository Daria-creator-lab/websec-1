function whenButtonClicked(){

    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;
    let selectAction = document.getElementById("select").value;
    let result = 0;

    value1 = isNaN (value1) ?  "Incorrect input" : parseFloat(value1);
    value2 = isNaN (value2) ?  "Incorrect input" : parseFloat(value2);

    if(value1 == "Incorrect input" || value2 == "Incorrect input")
    {
        document.getElementById("results").innerText = "Incorrect input";
        return;
    }

    console.log(value1,value2,selectAction);

    switch (selectAction){
        case "plus":
            result = value1 + value2;
            document.getElementById("results").innerText = String(value1) + "+" + String(value2) + "=" + String(result);
            break
        case "minus":
            result = value1 - value2;
            document.getElementById("results").innerText = String(value1) + "-" + String(value2) + "=" + String(result);
            break 
        case "mult":
            result = value1 * value2;
            document.getElementById("results").innerText = String(value1) + "*" + String(value2) + "=" + String(result);
            break
        case "div":
            if (value2 == 0){
                console.log(value2, "Division by zero");
                result = "Division by zero"
                document.getElementById("results").innerText = String(result);
            }
            else {
                result = value1 / value2;
                document.getElementById("results").innerText = String(value1) + "/" + String(value2) + "=" + String(result);
            }
            break                
    }
}

function changesCheck(fieldName){
    console.log(fieldName);

    let value1 = document.getElementById(fieldName).value;
    
    document.getElementById(fieldName).style.color = (isNaN (value1) ?  "#FF0000" : "#000000");

}

function outputResult(){

}