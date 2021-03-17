//DESAFIO 3
const ds1 = () =>{
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
      resolve('resolveu d1');
      }, 3000);
    })
  }
  
  const ds2 = () =>{
    return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('resolveu d2');
    }, 2000);
    })
  }
  
 async function f() {
   try{
     const r = await Promise.all([ds1(),ds2()]);
     console.log(r);
   } catch (erro) {
     console.log(erro);
   } finally {
     console.log("fim da execução");
   }
 }
f();