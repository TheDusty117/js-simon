//VISUALIZZARE 5 NUMERI RANDOM CON ALERT

const fiveRandomNums = populateFiveRandomNums()

console.log(fiveRandomNums)


//DOPO I 30 SECONDI UTENTE DEVE INSERIRE TRAMITE PROMPT GLI STESSI NUMERI RANDOM DELL'ALERT
//INSERISCI UN TIMER DI 30 SECONDI PER FAR ACCADERE TUTTO CIO'

const clock = setInterval(function () {

const yourFiveNums = populateYourNums()

console.log(yourFiveNums)

clearInterval(clock) //NB dico a const clock, di togliere l'interval dopo una sola attivazione, quindi si attivera' una sola volta
}, 5000);

//CONTROLLARE SE I 5 NUMERI PROMPT inseriti da utente SONO UGUALI AI 5 dell'ALERT

// for (let i=0; i < 5; i++) {
//   if (fiveRandomNums[i] === yourFiveNums[i]){
//     console.log('hai indovinato')
//   } else {
//     console.log('nooooo')
//   }
// }

//STAMPARE QUANTI NUMERI SONO STATI INSERITI CORRETTAMENTE














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
