const employeeData = [
    { employee: "user1", status: "active" },
    { employee: "user2", status: "inactive" },
  ];
  
const groupedData = employeeData.reduce((acc, item) => {
    const { status } = item;
    if (!acc[status]) {
        acc[status] = [];
    }
    acc[status].push(item);
    return acc;
}, {});

console.log(groupedData);
