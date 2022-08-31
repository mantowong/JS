/*
In Javascript gibt es 7 verschiendene primitive (kein object, methode oder Eigenschaft):
1. string
2. number
3. bigint
4. boolean
5. undefined
6. symbol
7. null 
*/

//Bigint für sehr größe Zahlen
const previouslyMaxSafeInteger = 9007199254740991n

const alsoHuge = BigInt(9007199254740991)
// ↪ 9007199254740991n

//undefined ist die Eigenschaft eines globalen Objekts/Variable, die bereits deklariert wurde, aber noch nicht initialisiert wurde

//Symbol wird verwendet, um Einzigartoge Eigenschaften zu deklarieren (Darf nur einmal existieren)
const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('foo');

Symbol('foo') === Symbol('foo')  // false

//null beschreibt eine leeren oder (noch) unbekannten Wert
let number = null; //number soll später noch initiiert werden
//im gegensatz zu undefined wurde der Wert bereits mmit null initialisiert

//Datentyp herausfinden mit typeof
var x = 2;
console.log(typeof(x)); //Ausgabe: number