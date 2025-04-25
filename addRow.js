function addRow() {
    const imie = document.getElementById("imie").value.trim();
    const nazwisko = document.getElementById("nazwisko").value.trim();
    const datazatrudnienia = document.getElementById("data_zatrudnienia").value.trim();
    const stanowisko = document.getElementById("stanowisko").value.trim();
    const przelozonyValue = document.getElementById("przelozony").value.trim();
    const obecny = document.getElementById("obecnosc").checked;

    const table = document.getElementById("my_table");
    const newRow = table.insertRow();

    // tworzenie komurek
    const imieNazwiskoCell = newRow.insertCell();
    const stanowiskoCell = newRow.insertCell();
    const przelozonyCell = newRow.insertCell();
    const dataCell = newRow.insertCell();
    const obecnyCell = newRow.insertCell();

    // wpisywanie danych
    imieNazwiskoCell.innerText = `${imie} ${nazwisko}`;

    stanowiskoCell.innerText = `${stanowisko}`;
    przelozonyCell.innerText = `${przelozonyValue}`;
    dataCell.innerText = `${datazatrudnienia}`;
    obecnyCell.innerHTML = `
    <span>${obecny}</span>
    <span style="margin-left: 10px;">${new Date().toLocaleDateString("pl-PL")}</span>
    `;

    //robienie że da się zmieniać
    imieNazwiskoCell.contentEditable = "true";
    stanowiskoCell.contentEditable = "true";
    przelozonyCell.contentEditable = "true";
    dataCell.contentEditable = "true";
    obecnyCell.contentEditable = "false";

    document.getElementById("imie").value = "";
    document.getElementById("nazwisko").value = "";
    document.getElementById("data_zatrudnienia").value = "";
    document.getElementById("stanowisko").value = "";
    document.getElementById("przelozony").value = "";
    document.getElementById("obecnosc").checked = false;
    document.getElementById("progressBar").style.width = "0"
}