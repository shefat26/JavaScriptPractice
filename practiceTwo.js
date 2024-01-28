

//



let users = [
    {
      firstName: "Susan",
      lastName: "Steward",
      age: 17,
      hobby: "Singing",
      salary: 30000,
    },
    {
      firstName: "Daniel",
      lastName: "Longbottom",
      age: 18,
      hobby: "Football",
      salary: 70000,
    },
    {
      firstName: "Jacob",
      lastName: "Black",
      age: 19,
      hobby: "Singing",
      salary: 50000,
    },
  ];
  
  let a = [1, 2, 3, 4, 5,6];
  let p = [7, 8, 9, 10];
  
  //Rest operator
  let [m,,...d] = a;
  console.log(d);
  console.log(m);
  
  //spread operator
  let c = [...a, ...d];
  console.log(c);
  
  // Ternary operator
  
  let turn = a.length > 5 ? "SP length is greater" : "SP length is smaller";
  
  console.log(turn);
  
  
  
  