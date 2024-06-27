function number(n,evenCall,oddCall){
    if(n%2==0){
        evenCall(n);
    }
    else{
        oddCall(n);
    }
}
function even(n){
    console.log(`${n} is even`);
}
function odd(n){
    console.log(`${n} is odd`);
}
number(4,even,odd);
