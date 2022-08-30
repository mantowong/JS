/*
Es gibt drei Arten von Scopes:
- Block-scope
- function-scope
- global-scope
*/

//Block-scope

/*
let und const sind Block-scoped
-> Variablen sind nur innerhalb des {}-Blocks gültig und können nicht von außen zugegriffen werden
*/
{
    let x = 2;
  }
// x can NOT be used here 

//Local-Scope
/*
Variablen, die innerhalb einer Funktion deklariret wird, sind nur lokal für die Funktion verfügbar
*/
// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
  }
  
  // code here can NOT use carName 

//funciton-scope
/*
Alle Variablen innerhalb einer Funktion sind nur für die Funktion verfügbar und nicht von außen zugreifbar (außer var)
*/
function myFunction() {
    var carName = "Volvo";   // Function Scope, global scope
  }

  function myFunction() {
    let carName = "Volvo";   // Function Scope
  }

  function myFunction() {
    const carName = "Volvo";   // Function Scope
  }

// Global scopes
/*
var, let, const sind globale Variablen, wenn sie außerhalb einer Funktion deklariert werden
*/
var x = 2;       // Global scope
let x = 2;       // Global scope 
const x = 2;       // Global scope 