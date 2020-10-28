let naujas = document.getElementById('naujas');
let duomenuModal = document.getElementById('duomenu_modalas');
let trintiModal = document.getElementById('trinti_modalas');
let duomenuForma = document.getElementById('duomenu_forma');
let tbody = document.querySelector('tbody');
let deleteRow = document.getElementById('deleteRow');
var deleteIndex, editIndex;
var mainModalButton = document.getElementById('main_modal_mygtukas');
// Modalo Inputai
var data = document.getElementById('data');
var numeris = document.getElementById('numeris');
var laikas = document.getElementById('laikas');
var kelias = document.getElementById('kelias');

var redaguotiDuomenis = false;
const duomenys = [];

// Sukelti duomenis i lentele
function print() {
    tbody.innerHTML = '';
    for (var i = 0; i < duomenys.length; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < duomenys[i].length; j++) {
            var td = document.createElement('td');
            td.innerHTML = duomenys[i][j];
            tr.appendChild(td);
        }
        // Delete mygtukas
        var delButton = document.createElement('button');
        delButton.classList.add('trinti');
        delButton.innerHTML = 'trinti';
        var delTd = document.createElement('td');
        delTd.appendChild(delButton);
        tr.appendChild(delTd);
        // Edit mygtukas
        var editButton = document.createElement('button');
        editButton.classList.add('Redaguoti');
        editButton.innerHTML = 'redaguoti';
        var editTd = document.createElement('td');
        editTd.appendChild(editButton);
        tr.appendChild(editTd);
        tbody.appendChild(tr);
    }
}
// Atidaryti pridejimo modala
naujas.addEventListener('click', function () {
    duomenuModal.classList.add('modal_overlay--active');
    mainModalButton.innerHTML = 'Prideti';
    redaguotiDuomenis = false;
});

// Pridedam duomenis
duomenuForma.addEventListener('submit', function (e) {
    e.preventDefault();
    var naujasM = [data.value, numeris.value, laikas.value, kelias.value];
    // Jeigu redaguojam, idedam ta nauja sukurta masyva i kazkuria duomenu masyvo vieta
    if (redaguotiDuomenis) {
        duomenys.splice(editIndex, 1, naujasM);
    } else {
        duomenys.push(naujasM);
    }
    print();
    duomenuForma.reset();
    duomenuModal.classList.remove('modal_overlay--active');
});

tbody.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('Istrinti')) {
        trintiModal.classList.add('modal_overlay--active');
        deleteIndex = e.target.parentElement.parentElement.rowIndex - 1;
    }
})

// uzdedam eventa and deleterow mygtuko
deleteRow.addEventListener('click', function () {
    duomenys.splice(deleteIndex, 1);
    trintiModal.classList.remove('modal_overlay--active');
    print();
    console.log(duomenys);
});

tbody.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('redaguoti')) {
        duomenuModal.classList.add('modal_overlay--active');
        editIndex = e.target.parentElement.parentElement.rowIndex - 1;
        // sudedam duomenis is masyvo i modalo inputus
        data.value = duomenys[editIndex][0];
        numeris.value = duomenys[editIndex][1];
        laikas.value = duomenys[editIndex][2];
        kelias.value = duomenys[editIndex][3];
        mainModalButton.innerHTML = 'Redaguoti';
        redaguotiDuomenis = true;
    }
})




// // Ismes alerta jei eilutes tuscios
// x1 = document.getElementById("inputas1").value;
// x2 = document.getElementById("inputas2").value;
// x3 = document.getElementById("inputas3").value;
// x4 = document.getElementById("inputas4").value;
// if (x1 == "" && x2 == "" && x3 == "" && x4 == "") {
//     alert("Uzpildykite pirmas eilutes");
//     return false;
// // Pirmas langelis
// var x1;
// x1 = document.getElementById("inputas1").value;
// if (x1 == "") {
//     alert("Uzpildykite Data Laika");
//     return false;
// };
// // Antras langelis
// var x2;
// x2 = document.getElementById("inputas2").value;
// if (x2 == "") {
//     alert("Uzpildykite numeri");
//     return false;
// };
// // Trecias langelis        
// var x3;
// x1 = document.getElementById("inputas3").value;
// if (x3 == "") {
//     alert("Uzpildykite atstuma metrais");
//     return false;
// };
// // Ketvirtas langelis
// var x4;
// x4 = document.getElementById("inputas4").value;
// if (x4 == "") {
//     alert("Uzpildykite laika sekundemis");
//     return false;
// };}