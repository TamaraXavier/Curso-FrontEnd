// OBJETO USER

const user = {
  nome: 'Usuário',
  idade: 25,
  endereco: {
    rua: 'Rua central',
    numero: 1
  },
  projetos: ['Projeto 1', 'Projeto 2']
}

console.log(user.nome);
console.log(user.endereco.rua);
console.log(user.projetos[1]);

// OBJETO USER 2
console.log(user["nome"]);
console.log(user.endereco["rua"]);
console.log(user.projetos[1]);
let n = "numero";
console.log(user.endereco[n]);

//Array
const students = [
  {id: 1, name: 'John Doe', age: 23, scholarship: false},
  {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
  {id: 3, name: 'Kayle', age: 22, scholarship: true}
]

//1
let array = [];

function tn(nm){
    array.push(nm.name);
}
students.forEach(tn);
console.log(array);

//2
let arr = [];

function nw(nm){
  if(nm["age"] > 20){
    arr.push(nm["name"]);
    
  }
}
students.forEach(nw);
console.log(arr);

//3
let newArray = [];

function have_s(item){
  if(item["scholarship"] == true){
    newArray.push(item);
  }
}
students.forEach(have_s);
console.log(newArray);