//DESAFIO 2 - REDUCE E SORT

//1- A
const somaidade = colaboradores.reduce((acc, soma) => {
  //console.log('colaboradores.idade: ', soma.idade);
  //console.log('acc: ', acc);
  return acc + soma.idade;
}, 0);
console.log('Soma das idades: ', somaidade);

//1 - B
const b = colaboradores.reduce(  (acc, colab) => Object.assign(acc,
  {[colab.cargo]: acc[colab.cargo] ?
    acc[colab.cargo] + 1 : 1}),
{} )
console.log(b);

//2 - A
const a2 = colaboradores.slice().sort((a, b) => {
  if(a.idade < b.idade){
    return -1;
  }
  if(a.idade > b.idade){
    return 1;
  }
  return 0;
})
console.log(a2);
//console.log(colaboradores); 

//2 - B
const b2 = colaboradores.slice().sort((a, b) => {
  if(a.idade > b.idade){
    return -1;
  }
  if(a.idade < b.idade){
    return 1;
  }
  return 0;
})
console.log(b2);
//console.log(colaboradores);

//2 - C
const c2 = colaboradores.slice().sort((a,b) =>{ 
  let ordem = {
    estagiario: 1,
    'front-end': 2,
    'back-end': 3,
    designer: 4
    } 
  return ordem[a.cargo] - ordem[b.cargo]
  })
  console.log(c2);

  //2 - D
  const d = colaboradores.slice().sort((a,b) =>{ 
    let ordem = {
      'estagiario': 1,
      'front-end': 2,
      'back-end': 3,
       'designer': 4
    } 
    return ((a.idade - b.idade) === 0) ?
         (ordem[a.cargo] - ordem[b.cargo]):
         (a.idade - b.idade)
    })
    console.log(d);