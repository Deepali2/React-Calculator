const operations = {
  "÷": function(a,b) { return a/b;},
  "×": function(a,b) { return a*b;},
  "-": function(a,b) { return a-b;},
  // using parseFloat is necessary, otherwise it will result in string concatenation 
  "+": function(a,b) { return parseFloat(a)+parseFloat(b);}
}

export default operations;