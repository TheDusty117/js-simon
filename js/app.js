//VISUALIZZARE 5 NUMERI RANDOM CON ALERT

const fiveRandomNums = populateFiveRandomNums()

console.log(fiveRandomNums)


//DOPO I 30 SECONDI UTENTE DEVE INSERIRE TRAMITE PROMPT GLI STESSI NUMERI RANDOM DELL'ALERT
//INSERISCI UN TIMER DI 30 SECONDI PER FAR ACCADERE TUTTO CIO'

const clock = setInterval(function () { //inizio intervallo

const yourFiveNums = populateYourNums()

console.log(yourFiveNums)

const correctNumsArr = []
const wrongNumsArr = []

for (let i = 0; i < 5; i++){
  if (fiveRandomNums.includes(yourFiveNums[i])){
    correctNumsArr.push(yourFiveNums[i])
  } else {
    wrongNumsArr.push(yourFiveNums[i])
  }
}

console.log(correctNumsArr)
console.log(wrongNumsArr)

clearInterval(clock) //NB dico a const clock, di togliere l'interval dopo una sola attivazione, quindi si attivera' una sola volta
}, 5000);// fine intervallo secondi, (impostati 5 secondi per comodita')

//CONTROLLARE SE I 5 NUMERI PROMPT inseriti da utente SONO UGUALI AI 5 dell'ALERT




//STAMPARE QUANTI NUMERI SONO STATI INSERITI CORRETTAMENTE



//I NUMERI VENGONO TROVATI, MA DEVONO ESSERE INSERITI NELL'ORDINE CORRETTO ,ALTRIMENTI NON LI TROVA

// compareArrs (fiveRandomNums,yourFiveNums)
// console.log(fiveRandomNums, yourFiveNums)









// function arraysCompare (arrA, arrB) {
  //   if (arrA === arrB) return 
  // }
  




//FUNZIONI-------------------------------------------------------------------------------------

//popola l'array di 5 numeri casuali mostrati tramite ALERT
  function populateFiveRandomNums() {
    const fiveRandomNums = []
  
    for (let i = 0; i < 5; i++) {
      const numRandom = Math.floor(Math.random(1) * 100 + 1)
      fiveRandomNums.push(numRandom)
    }
    let fiveRandomsAlert = alert(fiveRandomNums)
  
    return fiveRandomNums
  }


//popola l'array di 5 numeri inseriti dall'UTENTE tramite PROMPT
  function populateYourNums() {
    const yourFiveNums = []
  
    for (let i = 0; i < 5; i++) {
      let askFiveNums = prompt('inserisci i 5 numeri visualizzati poco fa')
      let insertFiveNums = parseInt(askFiveNums)
      yourFiveNums.push(insertFiveNums)
    }
    return yourFiveNums
  }


  
  //confronta indice per indici i DUE ARRAY POPOLATI POCO FA
//CREA FUNZIONE CHE CONTROLLA GLI ELEMENTI DEI DUE ARRAY UNO AD UNO


// function compareArrs (arr1,arr2){

//   const objMap={};
  
// arr1.forEach((e1)=>arr2.forEach((e2)=> {if(e1 === e2){
//        objMap[e1]=objMap[e1]+1||1 ;
//     }
//   }
// ));
// console.log(Object.keys(objMap).map(e=>Number(e)));
// return console.log(`${Object.keys(objMap).map(e=>Number(e))}`)
// }