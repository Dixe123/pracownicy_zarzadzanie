function menu_right_show() {    //pokazanie menu , reset input
    document.getElementById("menu_right").style.display = "flex";

    document.getElementById("imie").value = "";
    document.getElementById("nazwisko").value = "";
    document.getElementById("data_zatrudnienia").value = "";
    document.getElementById("stanowisko").value = "";
    document.getElementById("przelozony").value = "";
    document.getElementById("obecnosc").checked = false;
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


function set_dark_mode(){
  document.getElementById("button_set_dark_mode").style.display = "none";
  document.getElementById("button_set_light_mode").style.display = "flex";
  document.documentElement.style.setProperty('--bg-color', '#0a0f1d');
  document.documentElement.style.setProperty('--text-color', '#e0e0e0');
}
function set_light_mode(){
  document.getElementById("button_set_light_mode").style.display = "none";
  document.getElementById("button_set_dark_mode").style.display = "flex";
  document.documentElement.style.setProperty('--bg-color', '#ffffff');
  document.documentElement.style.setProperty('--text-color', '#0a0f1d');
}