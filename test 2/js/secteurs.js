// Définitions des variables
const btnContainer = document.getElementById("myBtnContainer");
const allBtn = document.getElementById("allBtn");
const lilleBtn = document.getElementById("lilleBtn");
const arrasBtn = document.getElementById("arrasBtn");
const touquetBtn = document.getElementById("touquetBtn");
// getElementsByClassName retourne un tableau
const btns = btnContainer.getElementsByClassName("btn");
const x = document.getElementsByClassName("filterDiv");
const current = document.getElementsByClassName("active");
//  La constante show contient une string "show"
const show = "show";
// On définie le filtre de base au chargement de la page
let clickedBtn = "all";
// on exécute la fonction filterSelection() avec en paramètre la variable clickedBtn ce qui la lance une première fois au chargement de la page
// comme clickedBtn contient déjà "all" on verra toute les maisons
filterSelection(clickedBtn);
// Ajout De la classe active des boutons et event
// on crée une boucle avec "i = 0" tant que la valeur de i sera inférieur au nombre d'élément ayant la class btn on incrémente i de 1 avec "i++"
// on passe ici 4 fois dans la boucle car nous avons 4 boutons
for (let i = 0; i < btns.length; i++) {
  // btns est un tableau contenant tous les btn
  // on crée une premier événement "click" grâce à "addEventListener" qui prend deux paramètres
  // Le premier est le type d'événement et le second une fonction
  // btns[i] renvoie le bouton qui a l'index "i" et qui change à chaque passage dans la boucle
  // on ajoute un événement au clique sur le bouton à chaque passage
  btns[i].addEventListener("click", function () {
    // 1 retrait de la classe active
    // current est défini plus haut et renvoie un tableau des éléments contenant la classe "active"
    // la propriété ".className" permet de définir une classe à l'élément ciblé
    // la méthode replace() permet de remplacer une partie d'une chaîne de caractère par une autre
    // la méthode replace prend deux paramètres, le premier l'élément à remplacer et le second le nouvel élément
    // ici on sélectionne donc l'élément qui possède la classe "active" puis on remplace cette classe par une chaîne de caractère vide

    current[0].className = current[0].className.replace(" active", "");
    // 2 ajout de la classe active
    // this fait référence au bouton sélectionné au moment du passage dans la boucle
    // on lui ajoute la classe "active" si il est cliqué

    this.className += " active";
    // 3 on crée des condition qui vont permettre de modifier la variable "clickedBtn"
    // On se sert de la variable btns et on vérifie pour chaque passage dans la boucle l'index du bouton en cours
    // si "i === 0" on est sur le premier bouton qui est le bouton "tout" dans le html
    // on assigne donc à la variable clickedBtn la valeur "all"
    // si "i === 1" on est sur le deuxième bouton qui est le bouton "lille" dans le html
    // on assigne donc à la variable clickedBtn la valeur "lille"
    // Etc ...
    if (i === 0) {
      clickedBtn = "all";
      filterSelection(clickedBtn);
    } else if (i === 1) {
      clickedBtn = "lille";
      filterSelection(clickedBtn);
    } else if (i === 2) {
      clickedBtn = "arras";
      filterSelection(clickedBtn);
    } else if (i === 3) {
      clickedBtn = "touquet";
      filterSelection(clickedBtn);
    }
  });
}
// Fonction de sélection du filtre
function filterSelection(c) {
  // si c, donc la variable clickedBtn est égale à "all" clickedBtn = ""
  if (c == "all") c = "";

  // On crée une boucle qui va prendre la variable x qui est un tableau et tant que i est inférieur au nombre d'élément du tableau on repasse dans la boucle
  for (i = 0; i < x.length; i++) {
    // on déclenche la fonction pour retirer la classe "show"
    removeClass(x[i], "show");

    // indexOf() renvoie l'index d'un élément dans un tableau si cette élément n'existe pas cela renvoie -1
    // En premier on vérifie que l'élément existe bien dans le tableau grâce à > -1
    // la variable "x" est un tableau qui contient toute les div card
    // donc si "x" contient la valeur de "clickedBtn" (par exemple "lille")  ajoute à "x" la classe "show"
    if (x[i].className.indexOf(c) > -1) addClass(x[i], show);
  }
}
// Fonction d'ajout de classe
function addClass(element) {
  // La méthode split() permet de découper une chaine de caractère et de la transformer en tableau
  // on prend les classes de l'élément en cours on et en fait un tableau
  let arr1 = element.className.split(" ");

  // on crée une condition qui vérifie si "show" n'existe pas
  if (arr1.indexOf(show) == -1) {
    // on ajoute un espace " " et "show" dans la classe de l'élément
    element.className += " " + show;
  }
}
// Fonction de retrait de classe
function removeClass(element) {
  let arr1 = element.className.split(" ");

  // on crée une condition qui vérifie si "show" existe
  if (arr1.indexOf(show) > -1) {
    // La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments ici splice prend deux paramètres
    // le premier le début et le second le nombre à supprimer
    // ici arr1.indexOf(show) renvoie la position de show et 1 le nombre d'élément à supprimer
    arr1.splice(arr1.indexOf(show), 1);
  }
  // La méthode join() crée et renvoie une nouvelle chaîne de caractères en concaténant tous les éléments d'un tableau . La concaténation utilise la virgule ou une autre chaîne, fournie en argument, comme séparateur.
  // on transforme le tableau arr1 en chaine de caractère et on injecte cette chaine de caractère dans la classe de l'élément
  element.className = arr1.join(" ");
}


