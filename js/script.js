function copiarEmail() {
    const email = "eliabegai@gmail.com";
    
    const inputTemporario = document.createElement("input");
    inputTemporario.value = email;
    document.body.appendChild(inputTemporario);
    
    inputTemporario.select();
    document.execCommand("copy");
    
    document.body.removeChild(inputTemporario);
    
    // Exibe a notificação
    const notificacao = document.getElementById("notificacao");
    notificacao.classList.add("visivel");

    // Oculta a notificação após 2 segundos
    setTimeout(() => {
        notificacao.classList.remove("visivel");
    }, 2000);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}