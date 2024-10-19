/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  
  let arr1 = [
    { id: 5, name: "sameer", age: "18", profession: "taylor" },
    { id: 6, name: "danish", age: "20", profession: "cricketor" },
    { id: 7, name: "aslam", age: "24", profession: "driver" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    let newArr=arr.filter( (item)=>{
      return item.profession==="developer";
    })
  
    newArr.map((ele)=>{
      
      console.log(ele["id"], ele["name"], ele["age"], ele["profession"]);
      // console.log(ele["id"]);
      // console.log(ele["name"]);
      // console.log(ele["age"]);
      // console.log(ele["profession"]);
      
    })
  
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((ele)=>{
      if(ele.profession==="developer"){
  
        console.log(ele["id"], ele["name"], ele["age"], ele["profession"]);
        // console.log(ele["id"]);
        // console.log(ele["name"]);
        // console.log(ele["age"]);
        // console.log(ele["profession"]);
      }
    })
  
  }
  
  function addData() {
    //Write your code here, just console.log
    let newElement={id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newElement );
  
    arr.forEach((ele,idx)=>{
      console.log(ele["id"], ele["name"], ele["age"], ele["profession"]);
        // console.log(ele["id"]);
        // console.log(ele["name"]);
        // console.log(ele["age"]);
        // console.log(ele["profession"]);
      
  })
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.forEach((ele,idx)=>{
      if(ele.profession==="admin"){
        //console.log(ele.profession);
        //console.log(ele);
        //arr.remove();
        arr.splice(idx,1);
  
  
      }
      else{
        console.log(ele["id"], ele["name"], ele["age"], ele["profession"]);
        // console.log(ele["name"]);
        // console.log(ele["age"]);
        // console.log(ele["profession"]);
      }
    })
    
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let ansArr=arr.concat(arr1);
  
    ansArr.forEach((ele,idx)=>{
      console.log(ele["id"], ele["name"], ele["age"], ele["profession"]);
        // console.log(ele["id"]);
        // console.log(ele["name"]);
        // console.log(ele["age"]);
        // console.log(ele["profession"]);
      })
  }
  