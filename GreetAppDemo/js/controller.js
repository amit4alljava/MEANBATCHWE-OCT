/*
It is a Glue B/w View (HTML) and Model (Logic)
*/
window.addEventListener("DOMContentLoaded",function(){
   //alert("DOM CALL");
    document.getElementById("greetBt").addEventListener("click",function(){
       document.getElementById("msg").className="mycolor";
        document.getElementById("msg").innerHTML="Welcome "+initCap(document.getElementById("firstname").value)+" "+initCap(document.getElementById("lastname").value);
    })
});

//window.addEventListener("load",function(){
//alert("LOad Call....")
//});





//window.addEventListener("DOMContentLoaded",init);
//function init(){
//document.getElementById("greetBt").addEventListener("click",sayWelcome); 
//}
//function sayWelcome(){
//            var firstName = document.getElementById("firstname").value;
//            var lastName = document.getElementById("lastname").value;
//            var message = "Welcome "+firstName+ "  "+lastName;
//            document.getElementById("msg").innerHTML=message;
//        }