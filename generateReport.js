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