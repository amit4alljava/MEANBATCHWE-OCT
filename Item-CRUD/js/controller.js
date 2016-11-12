window.addEventListener("load",init);
function init(){
    document.getElementById("add").addEventListener("click",addNewItem);
    document.getElementById("itemno").innerHTML=itemOperations.id;
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
    img.setAttribute("itemno",itemOperations.id-1);
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