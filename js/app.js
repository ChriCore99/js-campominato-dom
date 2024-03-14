// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

const bottone = document.querySelector('.btn');

const elementoSelect = document.getElementById('select');

bottone.addEventListener('click', function(){
    const grigliaGrid = document.querySelector('.griglia');
    let elementiRiga;

    if (elementoSelect.value === 'facile'){
        elementiRiga = 10;
        grigliaGrid.classList.add('facile');
    } else if (elementoSelect.value === 'medio'){
        elementiRiga = 9;
        grigliaGrid.classList.add('medio');
    } else if (elementoSelect.value === 'difficile'){
        elementiRiga = 7;
        grigliaGrid.classList.add('difficile');
    }

    const numeroElementi = elementiRiga * elementiRiga;   // si può scrivere "anche elementiRiga ** 2;

    grigliaGrid.innerHTML = '';

    for(let i = 0; i < numeroElementi; i++){
        const numeri = i + 1;

        const elementoCella = document.createElement('div');   // creo l'elemento div per la cella
        elementoCella.className = 'cella';                     // dò al div la classe cella
        elementoCella.innerHTML = numeri;                      // inserisco in ogni cella un  umero
        grigliaGrid.append(elementoCella);                     // inserisco la cella nella griglia

        elementoCella.addEventListener('click', function(){
            elementoCella.classList.toggle('bg-blu');
            console.log(numeri);
        })
    } 
})
// Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.