//funzione pari e dispari

function paridispari(){
    const inputUtente = parseInt(prompt('inserire un numero da 1 a 5'));
    const oddEven = prompt('vuoi pari o dispari');
  
    let pcNumber = getRndInteger(1,5);
    let sum = pcNumber + inputUtente;
  
    if(inputUtente <= 5 && inputUtente >= 1){
      if(oddEven === 'pari'){
        if(sum % 2 === 0){
          alert('hai vinto');
        }else{
          alert('hai perso');
        }
      }else if(oddEven === 'dispari'){
        if(sum % 2 !== 0){
          alert('hai vinto');
        }else{
          alert('hai perso')
        }
      }
    }
  }