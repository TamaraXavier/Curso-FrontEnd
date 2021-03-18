//DESAFIO 2 
 //1
 function d1(...rest){
    result = rest;
    console.log(...result);
  }
  
  const obj1 = {
    name: "Tamara"
  }
  
  const obj2 = {
    idade: '21'
  }

  //2
function desc( { name: nome } = obj1){
    return nome;
  }
  r = desc();
  console.log(r);
  
  //3 
  function cnew(obj1, obj2){
    const newObj = {
      ...obj1,
      ...obj2
    }
    return newObj;
  }
  const result = cnew(obj1, obj2);
  console.log(result);
  
  //4 
  const arr1 = [1,4,7,2,5];
  const arr2 = [3,0,2,8,9];
  
  function array4(){
    const newArr = [...arr1, ...arr2]
    return newArr;
  }
  const resArr = array4(arr1, arr2);
  console.log(resArr.sort());