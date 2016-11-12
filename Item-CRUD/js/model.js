// Treat like a Class
// It is a Function Constructor
function Item(id, name,desc,price, url){
    this.id = id; // Member Varaible = local variable
    this.name =name;
    this.desc = desc;
    this.price= price;
    this.url = url;
    this.markForDeletion=false;
}

// Direct Object Creation - One time Object Creation
var itemOperations = {
    id:1, // key:value,key:value
    itemList:[], // Member Variable
    addItem:function(name,desc,price,url) // Local Variables
    {
        // New Object Created Every time , when u call add
        var itemObject = new Item(this.id,name,desc,price,url);
        this.itemList.push(itemObject);
        this.id++;
    },
    searchItem:function(id){
      var subArray = this.itemList.filter(function(obj){
          return obj.id==id;
      });
    return subArray.length>0?subArray[0]:null;
    },
    getAllItems:function(){
        return this.itemList;
    }
}