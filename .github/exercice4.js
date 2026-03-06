
let paires = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let compteurDifferences = 0;

for (let i = 0; i < paires.length; i++) {
    let [v1, v2] = paires[i];
    let resultatDoubleEgal = v1 == v2;
    let resultatTripleEgal = v1 === v2;
    
    console.log(v1, "==", v2, "->", resultatDoubleEgal, "   |   ", v1, "===", v2, "->", resultatTripleEgal);
    
    if (resultatDoubleEgal !== resultatTripleEgal) {
        compteurDifferences++;
    }
}

console.log("---");
console.log(compteurDifferences, "paire(s) où == et === donnent des résultats différents");