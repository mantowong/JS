
//Mit var lassen sich globale Variablen vereinbaren

var x = 2; 

if(x === 2){
    var y = 6;
    var z = x + y;
    console.log(z); //Ausgabe: z = 8
}
console.log(y) // Ausgabe: y=6
summe(x,y);

function summe(x,y){
    console.log(x+y); //Ausgabe: 8
    console.log(x+y+z); //Ausgabe: 16
}

//var x ist für das ganze Programm verfügbar, unabhängig wo es deklariert wird

/*
Ausgabe:
8
6
8
16
*/
