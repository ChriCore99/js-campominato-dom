// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

const bottone = document.querySelector('.btn');

const elementoSelect = document.getElementById('select');

bottone.addEventListener('click', function(){
    const grigliaGrid = document.querySelector('.griglia');

    // generare 16 numeri diversi randomconst
    const min = 1;
    let max = 100;
    const numeriRandom = 16;

    const arrayBombe = [];

    while (arrayBombe.length < numeriRandom) {
        // Genero un numero casuale
        const numeroRandom = Math.floor(Math.random() * max) + min;

        if (arrayBombe.includes(numeroRandom) === false) {
            arrayBombe.push(numeroRandom);
        }
    }
    console.log(arrayBombe);

    // generiamo gli elementi della griglia
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
            elementoCella.classList.add('bg-green');

            for(let i = 0; i < arrayBombe.length; i++){
                const cellaBomba = arrayBombe[i];
                if(parseInt(elementoCella.innerHTML) === cellaBomba){
                    elementoCella.classList.remove('bg-green');
                    elementoCella.classList.add('bg-red');
                }
            }
            
            console.log(numeri);
        })
    } 
})



// far diventare la cella rossa se boma e verde se non è bomba
// 
