function aggiungiCategoria() {
    let nomeNuovaCategoria = document.getElementById("inputCategoria").value;

    arrayCategorie.push(nomeNuovaCategoria);

    stampaCategorie();
    document.getElementById("inputCategoria").value = "";
}

function aggElementoAllaCategoria(indice,inputID) {
    //console.log(inputID);
    //console.log(indice);
    let nomeNuovoElemento = document.getElementById(inputID).value;
    if (nomeNuovoElemento != '') {
        elementiCategorie[indice].push(nomeNuovoElemento);
    }
    stampaCategorie();
}

function eliminaElementoDallaCategoria(indice) {

    let elementiDaCancellare = document.querySelectorAll("li input:checked");
    //console.log(elementiDaCancellare);
    

    elementiDaCancellare.forEach((elementoDaCancellare) => {
        idElemento = elementoDaCancellare.name;
        console.log(elementoDaCancellare.name);
        elementiCategorie[indice].splice(idElemento,1);

    });
    stampaCategorie();
}

/* let checkbox = document.getElementById();

console.log(checkbox);
//checkbox.addEventListener('click', function () {
    console.log(checkbox);
    // if (checkbox.checked == 'true' ){}
    checkbox.parentElement.classList.toggle("done");
//}); */