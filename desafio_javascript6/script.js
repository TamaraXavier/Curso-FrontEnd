//DESAFIO 1
const user = {
  nome: 'Usuário',
  idade: 25,
  endereco: {
    rua: 'Rua central',
    numero: 1
  },
  projetos: ['Projeto 1', 'Projeto 2']
}

  
  
 const students = [
    {id: 1, name: 'John Doe', age: 23, scholarship: false},
    {id: 2, name: 'Margoe Rose', age: 19, scholarship: true},
    {id: 3, name: 'Kayle', age: 22, scholarship: true}
]
  
  //1a
  const { nome } = user
  console.log(nome);
  
  //1b
  const { endereco: {rua} } = user
  console.log(rua);
  
  //1c
  const { projetos } = user
  console.log(projetos);
  
  //1d
  const {projetos: [ , proj] } = user
  console.log(proj);

  // DESAFIO 1 - 2a
  const [ first ] = students
  console.log(first);
  
  //2b
  const [ , , third] = students
  console.log(third);
  
  //2c
  const [ , { name } ] = students
  console.log(name);