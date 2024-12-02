    //Cadastra novo usuario
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value;

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const novoUsuario = {
        nome: nome,
        email: email,
        senha: senha, 
    };
    usuarios.push(novoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario cadastrado");
    window.location.href = "Login.html";
});


