function forLoop(array) { 
  for (let i = 0; i < 25; i++) {
   if(i == "1") array.push("I am 1 strange loop.");
   
         else array.push("I am `${i}` strange loops.");
} return array;
}

let countdown = 100;

function whileLoop(n) {
  while(n > 0) {
    console.log(n);
    n--
  }
return "done";
}

function doWhileLoop(array) {
  function maybeTrue() {
  return array.length > 0 && maybeTrue()
}

return array;
}