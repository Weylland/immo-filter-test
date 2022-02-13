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

console.log(x);
console.log(x[0]);

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
  // si c, donc la variable clickedBtn est égale à "all" clickedBtn = ""

  if (c == "all") c = "";

  // On crée une boucle qui va prendre la variable x
  // qui est un tableau et tant que i et inférieur
  // au nombre d'élément du tableau on repasse dans la boucle

  for (i = 0; i < x.length; i++) {
    // on déclanche la fonction pour retirer la classe "show"
    removeClass(x[i], "show");

    // indexOf() renvoie l'index d'un élément dans un tableau si cette élément n'éxiste pas cela renvoie -1
    // <div class="filterDiv cars">BMW</div> est le premier élément du tableau
    // En premier on vérifie que l'élément éxiste bien dans le tableau grace à > -1
    // si (x[<div class="filterDiv cars">BMW</div>] contient le nom de classe "cars" ) ajoute la classe "show"
    // Comme "cars" éxiste bien indexOf() va renvoyer "1" car cars est placé en deuxième position

    // Autre exemple pour x[<div class="filterDiv colors fruits">Orange</div>] ici on ne retrouve pas "cars" ce qui renvera -1
    // la fonction addClass ne sera donc pas exécuté

    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

// Fonction d'ajout de classe

function addClass(element, name) {
  // on initialise trois variable
  // arr1 et arr2 vont contenir des tableaux
  let i, arr1, arr2;

  // ici element est égale à x[i] donc element est égale à x[<div class="filterDiv cars">BMW</div>] por l'index 0
  // arr1 element.className va contenir les noms de classes de la div selectionné sous forme de chaine de charactère
  // split va découper cette chaine en un tableau split va découper la chaine au endroit ou il y a un espace grace au guillemet dans les parenthèses
  // pareil pour arr2

  arr1 = element.className.split(" ");
  arr2 = name.split(" ");

  console.log(arr2);

  // arr2 à toujours une length de 1 car il contient toujours 1 élément qui est "show" la boucle ne s'execute qu'une fois

  for (i = 0; i < arr2.length; i++) {
    // arr2[i] renvoie show
    // arr1.indexOf(arr2[i]) revient à vérifier arr1.indexOf("show")
    // si show n'existe pas dans arr1

    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Fonction de retrait de classe

function removeClass(element, name) {
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
