//DESAFIO 1
const p1 = () =>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
      resolve('resolveu p1');
      }, 3000);
    })
  }
  
  const p2 = () =>{
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('resolveu p2');
    }, 2000);
    })
  }
  
  const p3 = () =>{
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      reject('rejeitou p3');
      //resolve("resolveu p3"); -> R: "Todas as promises deram sucesso"
      }, 1000);
    })
  }
  
  Promise.all([p1(), p2(), p3()]).then(res => {
    console.log("Todas as promises deram sucesso");
  }).catch(() => {
    console.log("Alguma deu erro");
  })
  
  /*p1().then(() => {
    console.log("resolveu p1");
    p2().then(() => {
      console.log("resolveu p2");
      p3().then(() => {
        console.log("resolveu p3");
      }).catch(() => {
        console.log("rejeitou p3");
      })
    })
  })
  */