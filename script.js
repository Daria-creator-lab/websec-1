function whenButtonClicked(){

    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;
    let selectAction = document.getElementById("select").value;
    let result = 0;
    
 

    if(isNaN (value1) || value1 == ""){
        document.getElementById("results").innerText = "Incorrect input";
        return;
    }
    else
        value1 = parseFloat(value1);
    
    if(isNaN (value2) || value2 == ""){
        document.getElementById("results").innerText = "Incorrect input";
        return;
    }
    else
        value2 = parseFloat(value2);


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
            if (Math.abs(value2) < Number.EPSILON){
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
    
    document.getElementById(fieldName).style.color = (isNaN (value1) ?  "#9D00FF" : "#FF0000");

}

function outputResult(){

}