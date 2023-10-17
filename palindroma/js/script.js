//stringa palindroma

let stringa = prompt('inserire una stringa');

palindroma(stringa);

//soluzione usando una stringa come array di caratteri
function palindroma(stringa){
  const length = stringa.length;

  for(let i = 0; i < Math.floor(length / 2); i++){
    if(stringa[i] !== stringa[length - 1 - i]){
        alert('la stringa non é palindroma');
        return false;
    }
  }

  alert('la stringa é palindroma');
  return true;

}


//seconda soluzione

/*
palindroma2(stringa);

function palindroma2(stringa){

  let str2;
  str2 = stringa.split("").reverse().join("");

  if(stringa === str2){
    return true;
  }else{
    return false;
  }

}

*/