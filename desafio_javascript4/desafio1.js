//DESAFIO 1 - MÉTODOS ESPECÍFICOS

const colaboradores = [
    {
        name: 'Juca',
        idade: 25,
        cargo: 'front-end'
    },
    {
        name: 'Márcia',
        idade: 23,
        cargo: 'back-end'
    },
    {
        name: 'Vitória',
        idade: 28,
        cargo: 'designer'
    },
    {
        name: 'Fernando',
        idade: 19,
        cargo: 'estagiario'
    },
    {
        name: 'Fabiane',
        idade: 25,
        cargo: 'back-end'
    },
    {
        name: 'Jéssica',
        idade: 23,
        cargo: 'front-end'
    },
]


// 1
const d1 = colaboradores.map (nms => {
    return nms.name;
  })
  console.log(d1);

//2
const d2 = colaboradores.filter( function (front) {
    return front.cargo === 'front-end';
  })
  console.log("São Front-end: ", d2);

//3
const d3 = colaboradores.find(first => {
    return first.idade > 23;
  })
  console.log(d3);

//4
const d4 = colaboradores.filter(maiores => {
    return maiores.idade > 18;
  })
  console.log(d4);

//5
const d5 = colaboradores.some(estg => {
    return estg.cargo === 'estagiario';
  })
  console.log(d5);