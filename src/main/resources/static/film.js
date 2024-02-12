function visNavn(){
    let Fornavn = document.getElementById("fornavn").value;
}

function getData(){
    let data = [];
    console.log(data);

    var count = document.getElementById("antall").value;
    var fname = document.getElementById("fornavn").value;
    var ename = document.getElementById("etternavn").value;
    var nummer = document.getElementById("telefonnr").value;
    var post = document.getElementById("epost").value;

    data.push(count);
    data.push(fname);
    data.push(ename);
    data.push(nummer);
    data.push(post);

    console.log(data);

}
