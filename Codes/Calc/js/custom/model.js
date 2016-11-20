// It Contain Only Logic
app2.factory("calcfactory",function(){
    // factory always return an object
    var object = {
         salary :0,
        setSalary:function(salary){
            this.salary =parseInt(salary);
        },
        calcHRA:function(){
            return this.salary *0.30;
        },
        calcDA:function(){
        return this.salary *0.20;
    },
        calcTA:function(){
            return this.salary *0.10;
        },
        calcPF:function(){
            return 2000;
        },
        calcNS:function(){
            return this.salary + this.calcHRA() + this.calcDA()  + this.calcTA() - this.calcPF();
            
        }
    };
    return object;
})