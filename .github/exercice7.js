
let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

console.log("=== ÉTAPES ===");
let sousTotal = prix * quantite;
console.log("Sous-total:", sousTotal, "MAD");

let reduction = 0;
if (codePromo !== null && estMembre === true) {
    reduction = sousTotal * reductionPourcentage / 100;
}
console.log("Réduction:", reduction, "MAD");

let totalFinal = sousTotal - reduction;
console.log("Total final:", totalFinal, "MAD");

let paiementAccepte = soldeCompte >= totalFinal;
if (paiementAccepte) {
    console.log("Paiement accepté");
    let nouveauSolde = soldeCompte - totalFinal;
    console.log("Nouveau solde:", nouveauSolde, "MAD");
} else {
    console.log("Solde insuffisant");
}

console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   :", nomProduit);
console.log("Quantité  :", quantite);
console.log("Prix unit.:", prix, "MAD");
console.log("Sous-total:", sousTotal, "MAD");
console.log("Réduction :", reduction, "MAS");
console.log("Total     :", totalFinal, "MAS");
if (paiementAccepte) {
    console.log("Statut    : Paiement accepté");
    console.log("Solde     :", soldeCompte - totalFinal, "MAD");
} else {
    console.log("Statut    : Solde insuffisant");
}
console.log("=========================");