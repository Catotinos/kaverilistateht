

let kaverilisays = document.forms['lisays'];
kaverilisays.addEventListener('submit', kaveri);
document.getElementById("poista").addEventListener('click', poisto);
document.getElementById("jarjesta").addEventListener('click', jarjestely);


function kaveri(event){

    event.preventDefault();
    let elementname = document.querySelector('input[type="text"]').value;

    if(elementname.length < 1){
        alert('Anna nimi');
        return;
    }

    let newelement = document.createElement('li');
    let newelementtext = document.createTextNode(elementname);
    newelement.appendChild(newelementtext);
    newelement.id = elementname;

    document.querySelector('#itemList').appendChild(newelement);
}

function poisto(event){ 
    
    let nimi = document.querySelector('input[type="text"]').value;
    poistettava = document.getElementById(nimi);
    document.querySelector('#itemList').removeChild(poistettava);
    
    
}

function jarjestely(event) {
  var list, i, switching, b, shouldSwitch;
  list = document.getElementById("itemList");
  switching = true;
  while (switching) {
    switching = false;
    b = list.getElementsByTagName("LI");
    for (i = 0; i < (b.length - 1); i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}