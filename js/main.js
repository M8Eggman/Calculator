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
  height: 45px;
  font-size: 25px;
  align-content: center;
  text-align: right;
  overflow: auto;
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
spanReponse.textContent = "0";

// écoute les évenement de touches pressé
document.body.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
    case "+":
    case "-":
      spanCalcule.textContent += e.key;
      break;
    case "*":
      spanCalcule.textContent += "×";
      break;
    case "/":
      spanCalcule.textContent += "÷";
      break;
    case "Backspace":
      spanCalcule.textContent = spanCalcule.textContent.slice(0, -1);
      break;
    case "Enter":
      spanReponse.textContent = calculateur2000(spanCalcule.textContent);
      break;
  }
});

let bouton = document.getElementById("bouton");
bouton.addEventListener("click", (e) => {
  switch (e.target.textContent) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
    case ".":
    case "+":
    case "-":
    case "×":
    case "÷":
      spanCalcule.textContent += e.target.textContent;
      break;
    case "C":
      spanCalcule.textContent = "";
      break;
    case "CE":
      // transforme le calcule dans le span en array split à chaque opérateur et point et enlève les élément vide
      let listeCalcule1 = spanCalcule.textContent.split(/([.+\-×÷])/).filter((vide) => vide !== "");
      // enlève le dernier de la liste et le remet en string
      spanCalcule.textContent = listeCalcule1.splice(0, listeCalcule1.length - 1).join("");
      break;
    case "":
      spanCalcule.textContent = spanCalcule.textContent.slice(0, -1);
      break;
    case "±":
      let listeCalcule2 = spanCalcule.textContent.split(/([.+\-×÷])/).filter((vide) => vide !== "");
      // parcours tout les élément du tableau et au premier nombre le change de signe
      for (let i = listeCalcule2.length - 1; i >= 0; i--) {
        // vérifie que l'élément du tableau est bien un nombre est que l'élement précedent est un -
        if (!isNaN(parseFloat(listeCalcule2[i])) && listeCalcule2[i - 1] == "-") {
          listeCalcule2.splice(i - 1, 1, "+");
          break;
          // vérifie que l'élément du tableau est bien un nombre
        } else if (!isNaN(parseFloat(listeCalcule2[i]))) {
          // si le nombre précedent du tableau est un moins le change en plus sinon multiplie le nombre par -1
          if (listeCalcule2[i - 1] == "+") {
            listeCalcule2.splice(i - 1, 1, "-");
            break;
          } else {
            listeCalcule2[i] *= -1;
            break;
          }
        }
      }
      spanCalcule.textContent = listeCalcule2.join("");
      break;
    case "=":
      spanReponse.textContent = calculateur2000(spanCalcule.textContent);
      break;
  }
});
