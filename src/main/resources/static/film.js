let data = [];

let skjema =document.getElementById("billettSkjema");
let liste = document.getElementById("billettListe");
let slett = document.getElementById("tom-array");

function leggTilBillett(event){
event.preventDefault();
    let film = document.getElementById("film").value;
    let count = document.getElementById("antall").value;
    let fname = document.getElementById("fornavn").value;
    let ename = document.getElementById("etternavn").value;
    let nummer = document.getElementById("telefonnr").value;
    let post = document.getElementById("epost").value;

    //Opprette billett
    const billett ={film, count, fname, ename, nummer, post};

    data.push(billett);

    visBillett();

    skjema.reset();
}

function visBillett(){
    let ut="";
    for (let i=0; i<data.length; i++){
        let billett = data[i];
        ut+= `${billett.film},  ${billett.count},  ${billett.fname},
          ${billett.ename},  ${billett.nummer},  ${billett.post}`;
    }
    liste.innerHTML = ut;
}

function slettBillett(){
    data=[];
    visBillett();
}

skjema.addEventListener("submit", leggTilBillett);
slett.addEventListener("click", slettBillett);


