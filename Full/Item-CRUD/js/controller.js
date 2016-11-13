window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",addNewItem);
    document.getElementById("delete").addEventListener("click",deleteMark);
    
    document.getElementById("save").addEventListener("click",saveRecords);
    document.getElementById("itemno").innerHTML=itemOperations.id;
    document.getElementById("load").addEventListener("click",loadRecords);
    document.getElementById("clear").addEventListener("click",clearLocalData);
    document.getElementById("getdata").addEventListener("click",doAjax);
    
    document.getElementById("sort").addEventListener("click",sortByPrice);
    
}

function sortByPrice(){
itemOperations.itemList.sort(function(obj1,obj2){
return obj1.price - obj2.price;
});
    printAll(itemOperations.itemList)
}

function clearLocalData(){
    localStorage.clear();
    itemOperations.itemList=[];
    printAll(itemOperations.itemList);
   itemOperations.id=1; document.getElementById("itemno").innerHTML=itemOperations.id;
}

function doAjax(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "../servercall/items.json", true);
    xmlhttp.onreadystatechange = function() {
        console.log("States ",xmlhttp.readyState);
        if (xmlhttp.readyState == 4 ) {
           if (xmlhttp.status == 200) {
               localStorage.items = xmlhttp.responseText;
               loadRecords();
           }
          
        }
    };

    
    xmlhttp.send();
}


function loadRecords(){
   var array = JSON.parse(localStorage.items);
    printAll(array);
    itemOperations.itemList=array;
    itemOperations.id= array.length+1;
    document.getElementById("itemno").innerHTML=itemOperations.id;
}

function saveRecords(){
    var jsonString = JSON.stringify(itemOperations.itemList);
    console.log("JSON String is ",jsonString);
    if(localStorage){
    localStorage.items = jsonString;
        alert("Record Saved...");
    }
    else{
        alert("Ur Browser Doesn't have this feature...")
    }
    }

function deleteMark(){
    var array = itemOperations.deleteItems();
    
    
    printAll(array);
    
}
function printAll(array){
    var tableBody = document.getElementById("tablebody");
    tableBody.innerHTML="";
    array.forEach(printItem);
}

function addNewItem(){
    var name = document.getElementById("name").value;
    var desc = document.getElementById("desc").value;
    var price = document.getElementById("price").value;
    var url =  document.getElementById("url").value;
    itemOperations.addItem(name,desc,price,url);
    printItem(itemOperations.getAllItems()[itemOperations.itemList.length-1]);
    clear();
    
}

function clear(){
    var fields = document.getElementsByClassName("clear");
    Array.prototype.forEach.apply(fields,[function(w){
            w.value="";
    }]);
    document.getElementById("url").value="http://c2c.sulekhalive.com/lcproducts/mobiles/images/samsung/album/thumb/samsung-galaxy-j5(16).jpg";
    document.getElementById("name").focus();
    document.getElementById("itemno").innerHTML=itemOperations.id;
    
}

function printItem(itemObject){
    var tableBody = document.getElementById("tablebody");
    var tr = tableBody.insertRow();
    var index = 0;
    for(var key in itemObject){
   if(key=="url"){
       tr.insertCell(index).innerHTML="<img src='"+itemObject[key]+"'>";
   }
    else
    if(key=="markForDeletion"){
        continue;
    }    
    else{    tr.insertCell(index).innerHTML=itemObject[key];
         }
        index++;
    }
    //index++;
    var img = document.createElement("img");
    img.src="../images/green.png";
    img.className="hand";
    tr.insertCell(index).appendChild(img);
    img.addEventListener("click",toggleIt);
    img.setAttribute("itemno",itemObject.id);
    //tr.insertCell(index).innerHTML="<img src='../images/green.png'>&nbsp;<img src='../images/edit.png'>";
}
function toggleIt(){
   // alert("ItemNo is "+this.getAttribute("itemno")+" "+this);
    //console.log(this +" "+this.getAttribute("src") + " "+this.getAttribute("class")+" "+this.getAttribute("itemno"));
    var itemObject = itemOperations.searchItem(this.getAttribute("itemno"));
    if(itemObject){
       itemObject.markForDeletion = !itemObject.markForDeletion; this.src=itemObject.markForDeletion?"../images/red.jpg":"../images/green.png";
    }
    else{
        alert("Some Problem , Contact to System Vendor...");
    }
}