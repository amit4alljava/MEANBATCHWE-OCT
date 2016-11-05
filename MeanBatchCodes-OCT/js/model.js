function netSalary(salary){
    return salary + hra(salary) + da(salary) + ta(salary) - pf();
}

function hra(salary){
    return salary * 0.30;
}

function da(salary){
   return salary * 0.20; 
}
function ta(salary){
    return salary * 0.10;
}
function pf(){
    return 1000;
}