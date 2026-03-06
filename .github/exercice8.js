
let nom = "   ilhame   ";
let age = "19";
let email = "jalylilham19@gmail.com";
let scoreJeu = "200pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

console.log("===== RAPPORT UTILISATEUR =====");

let nomCorrige = nom.trim();
if (nomCorrige === "") nomCorrige = "Inconnu";
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');

let ageCorrige = Number(age);
if (Number.isNaN(ageCorrige) || ageCorrige <= 0) {
    console.log('age              : valeur invalide');
} else {
    console.log('age              :', ageCorrige, '(valide)');
}


let atIndex = email.indexOf('@');
let pointApresAt = false;
if (atIndex !== -1) {
    let apresAt = email.substring(atIndex + 1);
    pointApresAt = apresAt.indexOf('.') !== -1;
}
let emailValide = atIndex !== -1 && pointApresAt;
console.log('email            : "' + email + '"', emailValide ? '(valide)' : '(invalide : pas de point après @)');


let scoreCorrige = parseInt(scoreJeu);
if (Number.isNaN(scoreCorrige)) scoreCorrige = 0;
console.log('scoreJeu         :', scoreCorrige, '(extrait depuis "' + scoreJeu + '")');


let adminCorrige = estAdmin === "true";
console.log('estAdmin         :', adminCorrige, '(attention : Boolean("false") = true, conversion manuelle requise)');


let connexionCorrige = derniereConnexion ?? "Jamais connecté";
console.log('derniereConnexion: "' + connexionCorrige + '" (valeur par défaut via ??)');


let nbConnexions = Number(nombreConnexions);
if (nbConnexions === 0) {
    console.log('nombreConnexions : "Aucune connexion" (0 après conversion)');
} else {
    console.log('nombreConnexions :', nbConnexions);
}

console.log("================================");