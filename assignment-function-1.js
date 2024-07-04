const number=(n,evenCall,oddCall)=>{
    if(n%2==0){
        evenCall(n);
    }
    else{
        oddCall(n);
    }
}
const even=(n)=>{
    console.log(`${n} is even`);
}
const odd=(n)=>{
    console.log(`${n} is odd`);
}
number(4,even,odd);