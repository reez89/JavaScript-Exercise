/* 
FREQUENZA DI UN NUMERO

Nell'array di interi [2,4,1,5,6,3,4,2,7,4,5,4,5] il numero 2 è presente 3 volte. Diciamo quindi che 2 ha una "frequenza" di 3.
Nello stesso array il numero più frequente è 4 (con una frequenza di 4). Il secondo numero più frequente è 5 (con una frequenza di 3).

1) Scrivere la funzione getFrequente(array) che restituisce il numero più frequente in un array di interi passato come argomento.
2) Scrivere la funzione getFrequenti(array, k) che restituisce un array contenente i primi k numeri più frequenti in un array di interi passato come argomento.

*/

/* Numero più frequente */

// In questa funzione utilizzo il map, per trovare ed assegnare ad ogni numero un valore 1, qualora sia apparso per la prima volta
// e un + 1 qualora si presenti più volte.
// Per finire, estrapolo chiavi e valori, e trovo l'index corrispondente al valore piu' alto, e ritorno la chiave al valore più alto.
const getMostFrequentNumber = (numbersArray) => {
    const numbersRepetition = {}
    numbersArray.map((number) => {
        numbersRepetition[number] = numbersRepetition[number] + 1 || 1;
    })
    const uniqueKeysFromArray = Object.keys(numbersRepetition)
    const timesUniqueValuesRepeated = Object.values(numbersRepetition)
    const highestTimesUniqueValueRepeated = Math.max(...timesUniqueValuesRepeated)
    const highestValueRepeatedIndex = timesUniqueValuesRepeated.findIndex((x) => x === highestTimesUniqueValueRepeated)
    return Number(uniqueKeysFromArray[highestValueRepeatedIndex]);
}

/* Numeri più frequenti in base alla variabile k */

// Basandomi sulla precedente, converto prima il mio oggetto in un array, in modo tale da mettere in ordine i valori dal piu' alto al piu basso
// Con un ciclo for, in base alla quantità di numeri che si vogliono ottenere tramite il parametro k, ciclo l'array, che successivamente
// verrà mappato per ottenere i valori ottenuti.
const getMajorFrequentNumbers = (numbersArray, k) => {
    if (typeof k === 'string') { return console.log('Puoi inserire solo numeri interi maggiori di 0') }
    if (!k) { return console.log('Inserisci un numero positivo maggiore di 0') }
    const numbersRepetition = {}
    const highestValues = []
    numbersArray.map((number) => {
        numbersRepetition[number] = numbersRepetition[number] + 1 || 1;
    })
    const values = Object.entries(numbersRepetition)
    values.sort((a, b) => a[1] - b[1]).reverse();
    for (let i = 0; i < k; i++) {
        highestValues.push(values[i])
    }
    return highestValues.map((value) => Number(value[0]))
}



console.log(getMajorFrequentNumbers([2, 4, 1, 5, 6, 3, 4, 2, 7, 4, 5, 4, 5, 9, 9, 9, 9], 'e'));