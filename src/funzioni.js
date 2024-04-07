let arrayCategorie = ["disney", "pokemon", "dragonball"];

let elementiCategorie = {
    0: ["pippo", "topolino"],
    1: ["pikachu", "bulbasaur"],
    2: ["vegeta", "goku"]
}

function stampaCategorie() {
    let container = document.getElementById("container");
    container.innerHTML = "";

    arrayCategorie.forEach((nomeCategoria, indice) => {
        let divCategoria = document.createElement("div");

        // Titolo categoria
        let titolo = document.createElement("h3");
        titolo.innerHTML = nomeCategoria;

        // input elementi categoria 
        /* let checkBox = document.createElement("input");
        checkBox.type = 'checkbox';*/
        let input = document.createElement("input");
        let inputId = "input_" + nomeCategoria;
        input.id = inputId;
        //input.value;
        //console.log(inputId);

        let aggiungiAllaLista = document.createElement("button");
        aggiungiAllaLista.innerHTML = 'Aggiungi alla lista';
        aggiungiAllaLista.id = "btn_" + nomeCategoria;
        //aggiungiAllaLista.setAttribute("onclick", "aggElementoAllaCategoria(" + indice + "," + inputId + ")");
        aggiungiAllaLista.onclick = function(){aggElementoAllaCategoria(indice,inputId)};
        //console.log(aggiungiAllaLista.onclick);

        divCategoria.appendChild(titolo);
        let ulElementi = document.createElement("ul");
        /* divCategoria.appendChild(checkBox); */
        divCategoria.appendChild(ulElementi);
        divCategoria.appendChild(input);
        divCategoria.appendChild(aggiungiAllaLista);

        container.appendChild(divCategoria);


        if (elementiCategorie[indice] != undefined) {
            elementiCategorie[indice].forEach((nomeElemento) => {

                let liElemento = document.createElement("li");
                liElemento.innerHTML = nomeElemento;

                ulElementi.appendChild(liElemento);

            });
        }
        else {
            elementiCategorie[indice] = []
         }
    })
}

stampaCategorie();

function aggiungiCategoria() {
    let nomeNuovaCategoria = document.getElementById("inputCategoria").value;

    arrayCategorie.push(nomeNuovaCategoria);

    stampaCategorie();
    document.getElementById("inputCategoria").value = "";
}

function aggElementoAllaCategoria(indice,inputID) {
    console.log(inputID);
    console.log(indice);
    let nomeNuovoElemento = document.getElementById(inputID).value;
    elementiCategorie[indice].push(nomeNuovoElemento);

    stampaCategorie();
    //inputID.value = "";
}
// perché mi svuota tutti gli input delle liste?
// perché inputID mi diventa tutto l'input invece di essere solo l'id dell'input
