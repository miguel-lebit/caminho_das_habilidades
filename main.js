const desafios = [
    "Resolver um problema lógico",
    "Criar diferentes soluções",
    "Aprender novas funções",
    "Descobrir padrões",
    "Pensar em uma nova invenção"
];

function avaliarResposta(){
    const name = document.getElementById("name").value;
    const resposta = document.getElementById("resposta").value;
    const textoDesafio = document.getElementById("# resultado h3").innerHTML;

    if (resposta.trim() === ""){
        alert("digite a resposta primeiro antes de proseguir")   
        return;
    }

    let pontos = 0;

    if (resposta.length >= 30){
        pontos += 30;
    }

    const texto = resposta.toLowerCase();
    
    if( texto.include("criar")||
        texto.include("desenvolver")||
        texto.include("elaborar") ){
        pontos += 30;
    }
    if( texto.include("pesquisa")||
        texto.include("estudo")||
        texto.include("projeto") ){
        pontos += 30;
    }

    const tempo = Math.floor(Math.randon() * 10)+1;

    let nivel;

    if (pontos >= 90) {
    nivel = "Inventor de ideias";
} 

else if (pontos >= 50) {
    nivel = "Desenvolvedor de ideias";
}

else if (pontos >= 50) {
    nivel = "Desenvolvedor de ideias";

}