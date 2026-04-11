const caminho_pasta_imagens = "./imagens/";

const quadro = document.getElementById("quadro");



const titulos_slides = [
    "Evolução dos SOs: <em>3ª Geração</em>",
    "Contexto Histórico e <em>Época</em>",
    "Caracterização: <em>Multiprogramação</em>",
    "<em>Estrutura</em> e <em>Camadas</em>",
    "O <em>Kernel</em> / <em>Núcleo</em>",
    "<em>Tipo de Processamento</em> e <em>Shell</em>",
    "<em>NomeSO</em> e <em>Proprietário</em>",
    "<em>Máquina Virtual</em> e inovação",
    "Tipo de Chamada de Sistema",
    "Pontos positivos e negativos",
    "Contribuição para a próxima geração",
    "Conclusão"
];



const topicos_abordados = [

    ["Guilherme Porto e Silva", 
        "Inácio", 
            "Artur Lima"],

    ["Período de <em>1965 a 1980</em>.", 
        "Substituição dos transistores pelos <em>Circuitos Integrados (CIs)</em>.", 
            "Computadores menores, mais rápidos e multitarefas."],

    ["A C.P.U. não fica mais ociosa esperando dados.", 
        "A memória é <em>dividida entre várias tarefas</em>.", 
            "Otimização drástica do tempo de uso do processador."],

    ["Organização do sistema em <em>níveis de abstração</em>.", 
        "Isolamento entre o hardware e o usuário final.", 
            "Facilita a programação e garante <em>maior segurança</em>."],

    ["Atua como o <em>\"maestro\"</em> do sistema.", 
        "Gerencia memória, escalonamento e periféricos.", 
            "Software residente essencial para a complexidade da <em>multiprogramação</em>."],

    ["Evolução para o <em>Tempo Compartilhado</em> (Time-sharing tasks).", 
        "Vários usuários simultâneos no mesmo computador.", 
            "Introdução do <em>Shell</em>, com interface de linha de comando."],

    ["<em>OS/360</em> (Proprietário: IBM) - Família de sistemas.", 
        "<em>MULTICS</em> (MIT, Bell Labs, GE) - Ambicioso e inovador.", 
            "<em>UNIX</em> (AT&T / Bell Labs) - Um marco na computação."],

    ["Surgimento no sistema <em>IBM CP/CMS</em>.", 
        "Simulação de um <em>hardware completo</em> para cada usuário.", 
            "Permite rodar diferentes SOs na mesma máquina física."],

    ["A ponte entre as aplicações e o <em>núcleo</em>.", 
        "Padronização para solicitação de serviços.", 
            "Exemplos: <em>read()</em>, <em>write()</em>, <em>open()</em>, <em>fork()</em>."],

    ["<strong>Positivos:</strong> Aumento de eficiência, interatividade, portabilidade.", 
        "<strong>Negativos:</strong> Alta <em>complexidade</em> de software (bugs), sistemas muito pesados, hardware caro.", 
            ""],

    ["Deixou o caminho pronto para a <em>4ª geração (PCs)</em>.", 
        "Desenvolvimento da poderosa <em>linguagem C</em>.", 
            "O sistema <em>UNIX</em> e a lógica moderna de gerenciamento de memória."],

    ["O divisor de águas da computação.", 
        "<em>Fim</em> da máquina de <em>\"uma coisa por vez\"</em>.", 
            "O nascimento dos <em>padrões modernos</em> e multiusuários."]
];



const imagens = [
    "Capa.png",
    "ibm-360.png",
    "kernel_rings.webp",
    "separacao-niveis.png",
    "amd-threadripper.webp",
    "compute_cluster-removebg-preview.png",
    "terminal-classico.png",
    "diagrama-maquina-virtual.png",
    "calls.png",
    "libra.png",
    "trans.png",
    "encerramento.png"
];



function montar_texto_slide (i) {

    const titulo_daquele_slide = document.createElement("h2");
    
    titulo_daquele_slide.innerHTML = titulos_slides[i];
    
    const parte_textual = document.createElement("div");
    
    parte_textual.appendChild(titulo_daquele_slide);
    
    const lista_topicos = document.createElement("ul");
    
    for (let j = 0; j < 3; j++) lista_topicos.appendChild(document.createElement("li")).innerHTML = topicos_abordados[i][j];
    
    parte_textual.appendChild(lista_topicos);

    return parte_textual;
}



function montar_slide (i) {

    const secao = document.createElement("section");

    secao.appendChild(montar_texto_slide(i));
    
    const imagem_daquele_slide = document.createElement("img");
    
    imagem_daquele_slide.src = caminho_pasta_imagens + imagens[i];

    imagem_daquele_slide.alt = titulos_slides[i].replace(/<em>|<\/em>/g, "");

    secao.appendChild(imagem_daquele_slide);
    
    secao.classList.add("slide");

    quadro.appendChild(secao);
}



function montar_slides () {

    const quantos_slides = titulos_slides.length;

    for (let i = 0; i < quantos_slides; i++) montar_slide(i);

    quadro.children[0].classList.add("atual");

    pegar_slides();
}



document.addEventListener("DOMContentLoaded", montar_slides);