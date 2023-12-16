const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
 
  const dataA=[
    { name: "arshad", age: 34, profession: "mechanic" },
    { name: "balram", age: 19, profession: "plumber" },
  ];
  

  // 1. Print Developers
  function printDeveloper() {
    console.log(data.profession);
    for (let key of data){
        if (key.profession==="developer")
        {
            console.log(key.name);
        }

    }
  }
  
  // 2. Add Data
  function addData() {
    let add ={
        name: "rajan",
        age:22,
        profession:"developer",
    }
     data.push(add);
     console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
   for(let i=0 ; i<data.length ; i++)
   {
    if(data[i].profession==="admin"){
        data.splice(i,1);
    }
    

   }console.log(data);

  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let nArray =data.concat(dataA);
    console.log(nArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum=0;
    let aAge=0;
    for(let i=0 ; i<data.length ; i++)
   {
    
        sum+=data[i].age;


   }console.log(sum/data.length);


  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let count=0;
    for(let i=0 ; i<data.length ; i++)
   {
    if(data[i].age>25){
        count++;

        console.log("yes atleast one person has age gereater than 25");
        break;
    }
   
    

   }  if(count===0){console.log("there is no one");}
    


  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const uniqueProfessions = [...new Set(data.map(item => item.profession)) ]
    console.log(uniqueProfessions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort ((a, b)=>(a.age-b.age));
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.map(item=>{
        if(item.name==="john"){
            item.profession="manager";
        }
    });
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
   let  countAdmin=0;
    let countDeveloper=0;
    data.map(item =>{
        if(item.profession==="admin")
        {
            countAdmin++;
        }
        if(item.profession==="developer")
        {
            countDeveloper++;
        }
    })
    console.log("developer : "+countDeveloper+" & admins :"+countAdmin)
  }



//   console.log("red");