app.controller("myctrl",function($scope,myfactory){
    $scope.loadMe=function(){
        var promise =myfactory.callServer();
       for(var i = 1 ; i<=10; i++){
        console.log("Doing something else.... ",i);
       }
        promise.then(function(data){
            $scope.output = data;
},function(error){
            $scope.error = error;
        })
    }
});