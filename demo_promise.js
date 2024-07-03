const  checknumber=(number)=>{
    return new Promise((resolve,reject)=>{
        if(number<5){
            setTimeout(()=>resolve("Number is valid"),2000);
        }
        else{
            setTimeout(()=>reject("Number is not valid"),2000);
        }
    })
}
const testnumber=async ()=>{
    try{
    const value= await checknumber(6);
    console.log(value);
    }
    catch(error){
        console.log(error);  
    }
}
testnumber();