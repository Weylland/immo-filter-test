// Définitions des variables

const btnContainer = document.getElementById("myBtnContainer");
const allBtn = document.getElementById("allBtn");
const carsBtn = document.getElementById("carsBtn");
const animalsBtn = document.getElementById("animalsBtn");
const fruitsBtn = document.getElementById("fruitsBtn");
const colorsBtn = document.getElementById("colorsBtn");

// getElementsByClassName retourne un tableau
const btns = btnContainer.getElementsByClassName("btn");
const x = document.getElementsByClassName("filterDiv");
const current = document.getElementsByClassName("active");

// On définie le filtre de base au chargement de la page

let clickedBtn = "all";
filterSelection(clickedBtn);

// Event au click des bouttons

// boutton all
allBtn.addEventListener("click", () => {
  clickedBtn = "all";
  filterSelection(clickedBtn);
});
// boutton cars
carsBtn.addEventListener("click", () => {
  clickedBtn = "cars";
  filterSelection(clickedBtn);
});
// boutton animals
animalsBtn.addEventListener("click", () => {
  clickedBtn = "animals";
  filterSelection(clickedBtn);
});
// boutton fruits
fruitsBtn.addEventListener("click", () => {
  clickedBtn = "fruits";
  filterSelection(clickedBtn);
});
// boutton colors
colorsBtn.addEventListener("click", () => {
  clickedBtn = "colors";
  filterSelection(clickedBtn);
});

// Fonction de selection du filtre

function filterSelection(c) {
  // si c donc la variable clickedBtn est égale à "all" clickedBtn = ""

  if (c == "all") c = "";

  // On crée une boucle qui va prendre la variable x
  // qui est un tableau et tant que i et inférieur
  // au nombre d'élément du tableau on repasse dans la boucle

  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Fonction d'ajout de classe

function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Fonction de retrait de classe

function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Ajout De la classe active des boutons

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
