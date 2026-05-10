// FORMULÁRIO

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  // CAMPOS VAZIOS
  if(nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos.");
    return;
  }

  // VALIDAÇÃO DE EMAIL
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailValido.test(email)) {
    alert("Digite um e-mail válido.");
    return;
  }

  // SUCESSO
  alert("Mensagem enviada com sucesso!");

  form.reset();

});


// TEMA ESCURO

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️";
  } else {
    themeToggle.textContent = "🌙";
  }

});