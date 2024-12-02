document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

   //Verifica se o Login é valido
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioEncontrado = usuarios.find(
        (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioEncontrado) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
        alert(`Bem-vindo, ${usuarioEncontrado.nome}`);
        window.location.href = "../home.html"; 
    } else {
        alert("E-mail ou senha incorretos. Por favor, tente novamente.");
    }
});
