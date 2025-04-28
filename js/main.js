// mes imports
import { calculateur2000 } from "./modules/function.js";

// structure de la calculette
document.body.innerHTML = `
<div id="calculette">
  <div id="ecran">
    <span id="calcule"></span>
    <span id="reponse"></span>
  </div>
  <div id="bouton">
    <button>CE</button>
    <button>C</button>
    <button><img src="./img/backspace.svg" alt="bouton effacer" width="16px" /></button>
    <button>÷</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>×</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>-</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>+</button>
    <button>±</button>
    <button>0</button>
    <button>.</button>
    <button>=</button>
  </div>
</div>
`;

// récupère les span
let spanCalcule = document.getElementById("calcule");
let spanReponse = document.getElementById("reponse");

// écoute les évenement de touches pressé
document.body.addEventListener("keydown", (e) => {
  let calcule = spanCalcule.textContent;
  // vérifie si c'est bien un input pris en charge par le programme
  // regarde si c'est un chiffre ou un point
  if (!isNaN(e.key) || e.key == ".") {
    // ajoute la touche pressé à la fin du string
    spanCalcule.textContent += e.key;
    // regarde si c'est un opérateur valide
  } else if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
    // vérifie si le string ne contient pas déjà un opérateur
    if (!(calcule.split("").includes("+") || calcule.split("").includes("-") || calcule.split("").includes("/") || calcule.split("").includes("*"))) {
      spanCalcule.textContent += e.key;
    }
    // regarde si c'est un backspace (retour en arrière)
  } else if (e.key == "Backspace") {
    // enlève la dernière lettre du string si le string a une longueur non nul
    if (calcule.length > 0) {
      spanCalcule.textContent = spanCalcule.textContent.slice(0, -1);
    }
    // regarde si c'est un enter
  } else if (e.key == "Enter") {
    if (!calculateur2000(calcule) == "") {
      spanReponse.textContent = calculateur2000(calcule);
      spanCalcule.innerHTML = "";
    }
  }
});
