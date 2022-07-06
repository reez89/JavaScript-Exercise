/* 
RESISTENZA DI UN NUMERO

La resistenza di un numero si ottiene moltiplicando tutte le cifre che lo compongono.

Ad esempio, se si moltiplicano tutte le cifre del numero 882 si ottiene 128 (8*8*2). 
Ripetendo l'operazione per 128 si ottiene 16 (16).
Ripetendo l'operazione per 16 si ottiene 6 (1*6). 
6 è di una sola cifra, quindi non è più possibile ripetere l'operazione. 
Dato che siamo riusciti a ripetere l'operazione per 3 volte, diciamo che 882 ha una "resistenza" di 3.

1) Scrivere la funzione getResistenza(numero), che restituisce la resistenza di un intero passato come argomento.
2) Qual è il numero più resistente che riesci a trovare?
*/

// Divido il numero intero ricevo in singole digit;
const getDivedNumbers = (n) => {
    const stringFromNumber = Math.floor(n).toString()
    const intergerFromString = [];
    for (let i = 0; i < stringFromNumber.length; i++) {
        let integerDigits = Number(stringFromNumber[i])
        intergerFromString.push(integerDigits)
    }
    return intergerFromString;
}

// Moltiplico tutte le digit e ritorno il risultato;
const getMultipledNumbers = (n) => {
    if (n.toString().length > 1) {
        const numbersToResistence = getDivedNumbers(n);
        const multipliedNumbers = numbersToResistence.reduce((previousValue, currentValue) => previousValue * currentValue);
        return multipliedNumbers;
    }
    return;
}

// Con il risultato ottenuto calcolo la resistenza;
const getResistence = (n) => {
    let resistence = []
    let multipliedNumber = getMultipledNumbers(n)
    if (multipliedNumber !== undefined)
        resistence.push(multipliedNumber)
    if (multipliedNumber !== undefined && multipliedNumber.toString().length > 1) {
        for (let i = 0; i < multipliedNumber.toString().length; i++) {
            multipliedNumber = getMultipledNumbers(multipliedNumber)
            resistence.push(multipliedNumber)
        }
    }
    return resistence.length
}



console.log(getResistence(882));
