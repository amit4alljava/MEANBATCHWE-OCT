app.filter("initcap",function(){
    return function(value){
        return value.charAt(0).toUpperCase() + value.substring(1);
    }
})