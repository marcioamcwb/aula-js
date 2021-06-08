/* Aula de JS avançado */

// ES6 -> ES2015

var nome = "edir"; //string
var idade = 123; //number
const nome = "edir";
nome = "abc";

if (true) {
    let nome = "edir";
    var nome = "abc";
}

// json objeto
const pessoa = {
    nome: "edir",
    idade: 123
}

console.log(pessoa.nome);

// vetor -> array
var cidades = ["pinhais", "colombo", "curitiba"];

// definação de classe
class Caneta 
{
    function escrever()
    {

    }
}

// criando uma variavel bic
// do tipo caneta
// instancia é criar uma variavel baseado numa classe
var bic = new Caneta();


// linguagem funcional
// função anonima
var soma = function(v1, v2){
    return v1 + v2;
}

var exp = function(v1, v2){
    return Math.pow(v1, v2);
}

function calcular(v1, v2, operacao)
{
    return operacao(v1, v2);
}


calcular(2,4, soma);
calcular(2,4, exp);

calcular(2,4, function(v1, v2){
    return v1 - v2;
})

// B1
// B2
// B3
// B4