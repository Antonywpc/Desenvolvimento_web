function copia_cola(){
    let n = document.getElementById('nome').value;
    let comando = "<h3> O nome do aluno é: " + n + "</h3> </br>";
    document.getElementById('sec_result').innerHTML += comando;
}

function calc_media(){
    let n1 = Number(prompt("informe a nota 1"));
    let n2 = Number(prompt("Informe a nota 2"));
    let n3 = Number(prompt("Informe a nota 3"));



    let media = (n1 + n2 + n3) / 3;

    let resultado;

    if(media >= 6){
        resultado = "Aprovado";
    } else if (media < 4){
        resultado = "Reprovado";
    } else {
        resultado = "Recuperação";
    }

    let comando = "<p> O aluno está " + resultado + "</br> Com a média :" + media.toFixed(2) + "</p></br>";

    document.getElementById('sec_result').innerHTML += comando;
}