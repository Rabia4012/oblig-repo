//Oppretter et array for billettene.
let data = [];

//Henter elementer fra HTML dokumentet
let skjema =document.getElementById("billettSkjema");
let liste = document.getElementById("billettListe");
let slett = document.getElementById("tom-array");

//Lager funksjonen LeggTilBillett.
function leggTilBillett(event){
event.preventDefault();
    //Samler alle verdiene fra input-boksene
    let film = document.getElementById("film").value;
    let count = document.getElementById("antall").value;
    let fname = document.getElementById("fornavn").value;
    let ename = document.getElementById("etternavn").value;
    let nummer = document.getElementById("telefonnr").value;
    let post = document.getElementById("epost").value;

    //Opprette billett
    let billett ={film, count, fname, ename, nummer, post};

    //Legger til billetten i data-arrayet.
    data.push(billett);

    //Kaller visBillett funksjonen.
    visBillett();

    //Tømmer alle input-feltene for neste billett.
    skjema.reset();
}

//Lager funksjonen visBillett
function visBillett(){
    let ut="<ul>";
    for (let i=0; i<data.length; i++){
        let billett = data[i];
        ut+= "<li>"+billett.film+", "+billett.count+", "+billett.fname+", "+billett.ename+", "+
            billett.nummer+", "+billett.post+ "</li>";
    }
    ut+="</ul>";
    liste.innerHTML = ut;
}

//Lager funksjonen slettBillett. Denne skal tømme arrayet når knappen blir trukket på.
function slettBillett(){
    //Tømmer data-array
    data=[];
    //Kaller visBillett funksjonen
    visBillett();
}

skjema.addEventListener("submit", leggTilBillett);
slett.addEventListener("click", slettBillett);


