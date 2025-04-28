export function calculateur2000(str) {
  let rep = 0;
  // selon l'opérateur va calculer le résultat
  if (str.split("").includes("+")) {
    if (compteurDeNombre(str.split("+")) > 2) {
      rep = NaN;
    } else {
      rep = parseFloat(str.split("+")[0]) + parseFloat(str.split("+")[1]);
    }
  } else if (str.split("").includes("*")) {
    if (compteurDeNombre(str.split("*")) > 2) {
        rep = NaN;
      } else {
        rep = parseFloat(str.split("*")[0]) * parseFloat(str.split("*")[1]);
      }
  } else if (str.split("").includes("/")) {
    if (compteurDeNombre(str.split("/")) > 2) {
        rep = NaN;
      } else {
        rep = parseFloat(str.split("/")[0]) / parseFloat(str.split("/")[1]);
      }
  } else if (str.split("").includes("-")) {
    if (compteurDeNombre(str.split("-")) > 2) {
        rep = NaN;
      } else {
        rep = parseFloat(str.split("-")[0]) + parseFloat(str.split("-")[1]);
      }
  } else {
    rep = parseFloat(str);
  }

  // selon le résultat va renvoyer une réponse adéquate
  if (isNaN(rep)) {
    alert("Vous n'avez pas tapé un calcule valide");
  } else if (!isFinite(rep)) {
    return "undefined";
  } else {
    return rep;
  }
}

// compte le nombre de nombre qu'il ya dans une liste
function compteurDeNombre(liste) {
  let compteur = 0;
  liste.forEach((element) => {
    if (!isNaN(parseFloat(element))) {
      compteur++;
    }
  });
  return compteur;
}
