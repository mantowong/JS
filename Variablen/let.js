
//Mit variablen lassen sich block-scoped Variablen vereinbaren, dh. let Variablen sind nur im Deklarierungsort gültig

//x ist für das gesamte Programm verfügvar
let x = 1; 

if (x === 1){
    let x = 2;
    let y = 1000; // y ist nur in der If-Vezweigung Verfügbar
    console.log(x); //Ausgabe: 2
    console.log(y);
}

function ausgabe(a){
   let x = 3;  
   console.log(a+x); //Ausgabe: 4
}
ausgabe(x);
console.log(x); //Ausgabe:1
//console.log (y); Fehler, da y nur in if-Verzweigung gültig ist.

//Let-Variablen können in unterschiedlichen Blöcken denselben Namen haben

/*
Ausgabe:
2
1000
4
1
*/