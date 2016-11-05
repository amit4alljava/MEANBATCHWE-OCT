/*
This will take to View and Model
*/
//console.log("Script Load");
window.addEventListener("DOMContentLoaded",init);
function init(){
  // console.log("Window Load Call"); 
   document.getElementById("showme").className="hide"; document.getElementById("salary").addEventListener("change",computeSalary);
}
function print(id,fn){
    var salary = parseInt(document.getElementById("salary").value);
    document.getElementById(id).innerHTML=fn(salary);
}
function computeSalary(){
    if(validateSalary()){
        document.getElementById("showme").className="show";
        print("da",da);
        print("ta",ta);
        print("pf",pf);
       print("hra",hra);    
       print("netsalary",netSalary);
        //alert("Now Compute Salary");
    }
}
function validateSalary(){
    
    var salaryObject = document.getElementById("salary");
    if(salaryObject){
        salaryObject = salaryObject.value;
        if(salaryObject){
            salaryObject = parseInt(salaryObject);
            var msg = isNaN(salaryObject)?"Only Number Allowed":"";
            msg = salaryObject?"":"Salary Can't be Zero";
            document.getElementById("error").innerHTML=msg;
        document.getElementById("error").className="error";
            if(!msg){
                return true;
            }
        }
        else{
            document.getElementById("error").innerHTML="Salary Can't Be Blank";
        document.getElementById("error").className="error";
        }
    }
    else{
        document.getElementById("error").innerHTML="Salary Id is Missing , Contact to System Vendor..";
        document.getElementById("error").className="error";
    }
    return false;
    //console.log("Compute Salary Call");
}