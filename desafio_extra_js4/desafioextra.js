//DESAFIO EXTRA
const installments = [
    {
      installment_number: 1,
      value: 123.45,
      status: 'Pago'
    },
    {
      installment_number: 2,
      value: 139.88,
      status: 'Pago'
    },
    {
      installment_number: 3,
      value: 123.45,
      status: 'Pago'
    },
    {
      installment_number: 4,
      value: 182.37,
      status: 'Aberto'
    },
    {
      installment_number: 5,
      value: 133.93,
      status: 'Aberto'
    }
  ]
// 1 - a
const exA = installments.reduce((acc, sum) => {
  return acc + sum.value;
}, 0);
console.log('Valor total: ', exA);

// 1 - b

const exB = installments.reduce((acc, v) => {
  if(v.status === 'Aberto'){
    return {
      total_paid: acc.total_paid,
      total_open:acc.total_open + v.value
    }
  } else {
    return {
       total_paid: acc.total_paid + v.value, 
      total_open: acc.total_open
    }
  }
}, {
  acc: 0,
  total_paid: 0,
  total_open: 0
})
console.log(exB);

// 1 - c
const exC = installments.slice().sort((a, b) => {
    if(a.value > b.value){
      return -1;
    }
    if(a.value < b.value){
      return 1;
    }
    return 0;
  })
  console.log(exC);

  // 1 - d
  const exD = installments.slice().sort((a, b) => {
    if(a.value === b.value){
      if(a.installment_number < b.installment_number){
        return 1;
      }
      else {
        return -1;
      }
    }
    
    if(a.value < b.value){
        return -1;
      }
      if(a.value > b.value){
        return 1;
      }
      return 0;
    })
    console.log(exD);