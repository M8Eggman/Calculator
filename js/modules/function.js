export function calculateur2000(str) {
  // sépare a chaque opérateur en les gardant dans la liste et enlève tout ce qui est vide de la liste
  let listeCalcule = str.split(/([.+\-×÷])/).filter((vide) => vide != "");
  let rep = 0;

  for (let i = 0; i < listeCalcule.length; i++) {
    // enlève le plus si il n'est préceder d'aucun nombre
    if (listeCalcule[i] == "+" && isNaN(parseFloat(listeCalcule[i - 1]))) {
      listeCalcule.splice(i, 1);
      i--;
    }
    // fusionne les + - ensemble quand ils sont collé
    if (listeCalcule[i] == "+" && listeCalcule[i + 1] == "+") {
      listeCalcule.splice(i, 2, "+");
      i--;
    } else if (listeCalcule[i] == "-" && listeCalcule[i + 1] == "-") {
      listeCalcule.splice(i, 2, "+");
      i--;
    } else if (listeCalcule[i] == "+" && listeCalcule[i + 1] == "-") {
      listeCalcule.splice(i, 2, "-");
      i--;
    } else if (listeCalcule[i] == "-" && listeCalcule[i + 1] == "+") {
      listeCalcule.splice(i, 2, "-");
      i--;
    }
  }
  // remplace les moins de la liste par des plus et change le signe du chiffre d'après
  for (let i = 0; i < listeCalcule.length; i++) {
    if (listeCalcule[i] == "-") {
      if (!isNaN(parseFloat(listeCalcule[i - 1]))) {
        listeCalcule.splice(i, 2, "+", listeCalcule[i + 1] * -1);
        i--;
      } else {
        listeCalcule.splice(i, 2, listeCalcule[i + 1] * -1);
        i--;
      }
    }
    listeCalcule.filter((vide) => vide != "");
  }
  console.log(listeCalcule);

  // vérifie que tout est bon avant de faire le calcul
  for (let i = 0; i < listeCalcule.length; i++) {
    // si il y'a qu'un seul nombre le retourne
    if (listeCalcule.length == 1 && !isNaN(parseInt(listeCalcule[0]))) {
      return listeCalcule[0];
    }
    // vérifie qu'après un operateur '*' '/' il n'y est pas un autre opérateur '*' '/'
    if ((listeCalcule[i] == "×" && listeCalcule[i + 1] == "×") || (listeCalcule[i] == "×" && listeCalcule[i + 1] == "÷") || (listeCalcule[i] == "÷" && listeCalcule[i + 1] == "×") || (listeCalcule[i] == "÷" && listeCalcule[i + 1] == "÷")) {
      return "SyntaxError";
    }
    // vérifie qu'après un opérateur il y a un nombre
    if (isNaN(parseFloat(listeCalcule[i]))) {
      if (isNaN(parseFloat(listeCalcule[i + 1])) && isNaN(parseFloat(listeCalcule[i + 2]))) {
        return "SyntaxError";
      }
    }
    // vérifie qu'avant un opérateur il y a un nombre
    if (isNaN(parseFloat(listeCalcule[i]))) {
      if (isNaN(parseFloat(listeCalcule[i - 1]))) {
        return "SyntaxError";
      }
    }
  }
  // fais toutes les multiplication et division
  for (let i = 0; i < listeCalcule.length; i++) {
    if (listeCalcule[i] == "×") {
      if (listeCalcule[i + 1] == "+" || listeCalcule[i + 1] == "-") {
        if (listeCalcule[i + 1] == "+") {
          rep = listeCalcule[i - 1] * listeCalcule[i + 2];
        } else {
          rep = -listeCalcule[i - 1] * listeCalcule[i + 2];
        }
        listeCalcule.splice(i - 1, 3, rep);
        i--;
      } else {
        rep = listeCalcule[i - 1] * listeCalcule[i + 1];
        listeCalcule.splice(i - 1, 3, rep);
        i--;
      }
    } else if (listeCalcule[i] == "÷") {
      if (listeCalcule[i + 1] == "+" || listeCalcule[i + 1] == "-") {
        if (listeCalcule[i + 1] == "+") {
          rep = listeCalcule[i - 1] / listeCalcule[i + 2];
        } else {
          rep = -listeCalcule[i - 1] / listeCalcule[i + 2];
        }
        listeCalcule.splice(i - 1, 3, rep);
        i--;
      } else {
        rep = listeCalcule[i - 1] / listeCalcule[i + 1];
        listeCalcule.splice(i - 1, 3, rep);
        i--;
      }
    }
  }
  // fais toutes les addition
  for (let i = 0; i < listeCalcule.length; i++) {
    if (listeCalcule[i] == "+") {
      rep = parseFloat(listeCalcule[i - 1]) + parseFloat(listeCalcule[i + 1]);
      listeCalcule.splice(i - 1, 3, rep);
      i--;
    }
  }
  return rep;
}
