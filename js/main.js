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
    <button class="supprimer">CE</button>
    <button class="supprimer">C</button>
    <button class="supprimer"><i class="fa-solid fa-delete-left"></i></button>
    <button class="op">÷</button>
    <button class="nombre">7</button>
    <button class="nombre">8</button>
    <button class="nombre">9</button>
    <button class="op">×</button>
    <button class="nombre">4</button>
    <button class="nombre">5</button>
    <button class="nombre">6</button>
    <button class="op">-</button>
    <button class="nombre">1</button>
    <button class="nombre">2</button>
    <button class="nombre">3</button>
    <button class="op">+</button>
    <button class="nombre">±</button>
    <button class="nombre">0</button>
    <button class="nombre">.</button>
    <button class="op">=</button>
  </div>
</div>
`;

// ajout une balise style dans le head
let head = document.getElementsByTagName("head")[0];
let style = document.createElement("style");
head.appendChild(style);
style.innerHTML = `
body {
  margin: 10;
  padding: 0;
  display: flex;
  justify-content: center;
}
#calculette {
  width: 350px;
  background-color: #5e4b86;
  border: #412c50 solid 5px;
}
#ecran {
  display: flex;
  flex-direction: column;
  margin: 18px;
  background-color: #456966;
  border: #412c50 solid 5px;
}
#calcule {
  height: 40px;
  font-size: 20px;
  align-content: center;
  overflow: auto;
}
#reponse {
  height: 50px;
  font-size: 40px;
  align-content: center;
  text-align: right;
}
#bouton {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding-bottom: 10px;
}
#bouton button {
  width: 75px;
  height: 75px;
  color: white;
  border-radius: 10px;
  font-size: 25px;
  border-width: 3px;
}
.supprimer {
  background-color: #412c50;
}
.nombre {
    background-color: #382c50;
}
.op {
    background-color: #f2d357;
}
`;

// récupère les span
let spanCalcule = document.getElementById("calcule");
let spanReponse = document.getElementById("reponse");

// écoute les évenement de touches pressé
document.body.addEventListener("keydown", (e) => {
  let calcule = spanCalcule.textContent;
  // vérifie si c'est bien un input pris en charge par le programme
  // regarde si c'est un chiffre ou un point ou un moins
  if (!isNaN(e.key) || e.key == "." || e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
    spanCalcule.textContent += e.key;
    // regarde si c'est un backspace (retour en arrière)
  } else if (e.key == "Backspace") {
    // enlève la dernière lettre du string si le string a une longueur non nul
    if (calcule.length > 0) {
      spanCalcule.textContent = spanCalcule.textContent.slice(0, -1);
    }
    // regarde si c'est un enter
  } else if (e.key == "Enter") {
    let rep = calculateur2000(calcule);
    if (typeof rep !== "undefined") {
      spanReponse.textContent = rep;
    }
  }
});

