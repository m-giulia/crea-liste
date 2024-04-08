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


        let titolo = document.createElement("h3");
        titolo.innerHTML = nomeCategoria;
 
        let input = document.createElement("input");
        let inputId = "input_" + nomeCategoria;
        input.id = inputId;
        //input.value;
        //console.log(inputId);

        /* ------- BOTTONE AGGIUNGI ------- */
        let aggiungiAllaLista = document.createElement("button");
        aggiungiAllaLista.innerHTML = 'Aggiungi alla lista';
        aggiungiAllaLista.id = "btn_" + nomeCategoria;
        aggiungiAllaLista.onclick = function(){aggElementoAllaCategoria(indice,inputId)};
        //aggiungiAllaLista.setAttribute("onclick", "aggElementoAllaCategoria(" + indice + "," + inputId + ")");
        //console.log(aggiungiAllaLista.onclick);
        

        divCategoria.appendChild(titolo);
        let ulElementi = document.createElement("ul");
        divCategoria.appendChild(ulElementi);
        divCategoria.appendChild(input);
        divCategoria.appendChild(aggiungiAllaLista);

        container.appendChild(divCategoria);
        
        let checkboxName = '';

        if (elementiCategorie[indice]) {
            elementiCategorie[indice].forEach((nomeElemento,iElemento) => {

                let liElemento = document.createElement("li");
                liElemento.innerHTML = nomeElemento;
                let checkBox = document.createElement("input");
                checkBox.type = 'checkbox';
                checkBox.name = iElemento;
                checkboxName = iElemento;
                checkBox.id = nomeCategoria + "_" + iElemento;

                ulElementi.append(liElemento);
                liElemento.prepend(checkBox);

            });
        }
        else {
            elementiCategorie[indice] = []
         }

         /* ------- BOTTONE ELIMINA ------- */
         let rimuoviDallaLista = document.createElement("button");
         rimuoviDallaLista.innerHTML = 'Rimuovi dalla lista';
         rimuoviDallaLista.id = "elimina_da_" + nomeCategoria;
         rimuoviDallaLista.onclick = function () { eliminaElementoDallaCategoria(indice) };
         divCategoria.appendChild(rimuoviDallaLista);
    })
}