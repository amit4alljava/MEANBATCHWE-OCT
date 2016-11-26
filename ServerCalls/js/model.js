app.factory("myfactory",function($http,$q,url){
var object = {};
    object.callServer = function(){
        
        var result = $q.defer();
        console.log("Going to Call the Server...."); $http.get(url).then(function(data){
            console.log("Data Comes... "+data);
            result.resolve(data);
        },function(error){
            console.log("Error Comes "+error);
            result.reject(error);
        });
        console.log("After Server Call....");
        return result.promise;
    }
return object;    
});