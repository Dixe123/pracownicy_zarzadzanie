function menu_right_show() {    //pokazanie menu , reset input
    document.getElementById("menu_right").style.display = "flex";

    document.getElementById("imie").value = "";
    document.getElementById("nazwisko").value = "";
    document.getElementById("data_zatrudnienia").value = "";
    document.getElementById("stanowisko").value = "";
    document.getElementById("przelozony").value = "";
    document.getElementById("obecnosc").checked = false;
}
function addRow() { //zapis
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
function generateReport() {
    const table = document.getElementById("my_table");
    const today = new Date().toLocaleDateString("pl-PL"); // robienie zmiennej daty
    let report = `Raport ${today}\n\n`;  //nazwa pliku

    for (let i = 1; i < table.rows.length; i++) { // 
        const row = table.rows[i];
        const imieNazwisko = row.cells[0].innerText;
        const stanowisko = row.cells[1].innerText;
        const przelozony = row.cells[2].innerText;
        const data = row.cells[3].innerText;
        const obecny = row.cells[4].innerText;

        report += `Pracownik: ${imieNazwisko}\n`;
        report += `Stanowisko: ${stanowisko}\n`;
        report += `Przełożony: ${przelozony}\n`;
        report += `Data zatrudnienia: ${data}\n`;
        report += `Obecny: ${obecny}\n`;
        report += `-------------------------------\n`;
    }

    // plik do pobrania
    const blob = new Blob([report], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);

    // Dodanie daty do nazwy pliku
    const fileDate = new Date().toISOString().slice(0, 10);
    link.download = `raport ${fileDate}.txt`;
    link.click();

    setTimeout(() =>{
        document.getElementById("sukces").style.transform = "translateY(80px)";
    },500)
    setTimeout(() =>{
        document.getElementById("sukces").style.transform = "translateY(0px)";
    }, 2500);
}
     
function exit(){
    document.getElementById("menu_right").style.display = "none";
    document.getElementById("progressBar").style.width = "0"
}

// zmienianie tego paska postępu
const inputs = document.querySelectorAll('#my_form input');
const progressBar = document.getElementById('progressBar');

inputs.forEach(input => {
  input.addEventListener('input', updateProgress);
});

function updateProgress() {
  let filled = 0;

  inputs.forEach(input => {
    if (input.value.trim() !== '') {
      filled++;
    }
  });

  const percent = (filled / inputs.length) * 100;
  progressBar.style.width = `${percent}%`;
}

document.getElementById("rok").textContent = new Date().getFullYear();