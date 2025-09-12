document.getElementById("nappula").addEventListener('click', aloita);

function aloita(event){
    kaverilista = [];
    for (let i = 0; i < 10; i++) {
        let kaveri = prompt("Syötä nimi:");
        kaverilista.push(kaveri);
    }
    console.log(kaverilista.length)
    for (let i = 0, len = kaverilista.length; i < len; i++){
        let newelement = document.createElement('li')
        console.log(kaverilista[i])
        newelement.append(kaverilista[i])
        document.querySelector('#itemList').appendChild(newelement)
    }

        








}