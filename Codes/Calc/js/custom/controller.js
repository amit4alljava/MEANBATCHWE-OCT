// It is a Controller , that is Glue B/w view and model
// $scope is angular define thing and it is a glue b/w view and controller
"use strict"
app.controller("salaryctrl",function($scope,calcfactory){
    $scope.showit=false;
    console.log("Factory Injected ",calcfactory);
    $scope.calculateSalary=function(){
        $scope.showit=true;
        var salary = $scope.salary;
        calcfactory.setSalary(salary);
        $scope.hra = calcfactory.calcHRA();
        $scope.da = calcfactory.calcDA();
        $scope.ta = calcfactory.calcTA();
        $scope.pf = calcfactory.calcPF();
        $scope.ns = calcfactory.calcNS();
    }
})