export function calculateur2000(str) {
  let rep = "";
  // selon l'opérateur va calculer le resultat
  if (str.split("").includes("+")) {
    rep = str.split("+")[0] + str.split("+")[1];
  } else if (str.split("").includes("-")) {
    rep = str.split("-")[0] - str.split("-")[1];
  } else if (str.split("").includes("*")) {
    rep = str.split("*")[0] * str.split("*")[1];
  } else if (str.split("").includes("/")) {
    rep = str.split("/")[0] / str.split("/")[1];
  }
  if (isNaN(rep)) {
    alert("Vous n'avez pas tapé un calcule valide");
  } else {
    return rep;
  }
}
