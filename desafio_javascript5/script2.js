//DESAFIO 2
const d1 = () =>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
      resolve('resolveu d1');
      }, 3000);
    })
  }
  
  const d2 = () =>{
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('resolveu d2');
    }, 2000);
    })
  }
  
  const d3 = () =>{
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject('rejeitou d3');
      //resolve("resolveu p3");---"Todas as promises deram sucesso"
      }, 1000);
    })
  }
  
  async function fun() {
    try{
        const res = await Promise.all([d1(), d2(), d3()]);
    console.log(res);
    } catch (erro){
        console.log(erro);
    }
  }
 fun();

