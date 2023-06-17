/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(printingThroughMap);

    function printingThroughMap(arrayItem){
        if (arrayItem.profession === "devloper"){
            console.log(arrayItem);

        }
    }
 }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(printingThroughForEach);
    function printingThroughForEach(arrayItem){
        if (arrayItem.profession === "devloper"){
            console.log(arrayItem);
    }
  }
}
  function addData() {
    //Write your code here, just console.log
    let newobj =  { id: 4, name: "susan", age: "45", profession: "intern" };
    arr.push(newobj);
    console.log(arr);
;
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    let filtered_arr = arr.filter(function (val){
        if (val.profession !== "admin"){
            return val;
        }
    })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        { id: 5, name: "atharv", age: "20", profession: "programmer" },
        { id: 6, name: "samarth", age: "21", profession: "developer" },
        { id: 7, name: "virat", age: "22", profession: "teavher" },
      ];
      let concatArray = arr.concat(arr2);
      console.log(concatArray);

  }
 