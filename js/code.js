console.log("Leu seu arquivo 'code.js'");
// alert("Leu o arquivo 'código.js'");
var a = "Um texto";
console.log(a, typeof(a));
a = 10;
let b = 5;
console.log(a, b);
console.log(typeof(a), typeof(b));
console.log('a + b: ', (a + b));
console.log('a + b: ', ("0" + a + b)); //atenção
console.log('a + b: ', (a + "0" + b)); //atenção
console.log('a + b: ', (a + b + "0")); //atenção
console.log('a - b: ', (a - b));
console.log('a * b: ', (a * b));
console.log('a / b: ', (a / b));
console.log('a % b: ', (a % b));

function altera(){
    let nome = document.getElementById('nome').value;
    console.log(nome);
    document.getElementById('tituloP').innerHTML = nome;
}