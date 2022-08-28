
//Mit const-Variablen deklariert man let-Variablen, die sich über den Prorgammverlauf nicht ändern können (Ausnahmen: Arrays, Objekte)

const x = 1

try {
    x = 99;
  } catch (err) {
    console.log(err);
    // expected output: TypeError: invalid assignment to const `number'
    // Note - error messages will vary depending on browser
  }
  
  console.log(x);
  // expected output:1, wenn im try x =1 steht


