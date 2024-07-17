const employeeData=[{employee: "user1" , status:"active"},{employee:"user2" ,status:"inactive"}]
const groupedData={}
for(const item of employeeData ){
    const status=item.status;
    if(!groupedData[status]){
        groupedData[status]=[]
    }
    groupedData[status].push(item)
}
console.log(groupedData)