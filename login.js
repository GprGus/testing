// Função para mostrar o modal de registro
document.getElementById('show-register').addEventListener('click', function() {
    document.getElementById('register-modal').style.display = 'block';
  });
  
  // Função para fechar o modal de registro
  document.getElementById('close-register').addEventListener('click', function() {
    document.getElementById('register-modal').style.display = 'none';
  });
  
  // Função de login
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const storedUser = localStorage.getItem('user');
  
    // Verifica se os dados de login correspondem ao que foi armazenado
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === username && user.password === password) {
        //alert('Login bem-sucedido!');
        window.location.href = 'index.html'; // Redirecionar para a página principal
      } else {
        alert('Usuário ou senha incorretos!');
      }
    } else {
      alert('Nenhum usuário encontrado. Crie uma conta.');
    }
  });
  
  // Função de cadastro
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
  
    // Verifica se os campos de usuário e senha não estão vazios
    if (newUsername.trim() === '' || newPassword.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Armazena os dados do novo usuário no localStorage
    const newUser = {
      username: newUsername,
      password: newPassword,
    };
  
    localStorage.setItem('user', JSON.stringify(newUser));
  
    alert('Conta criada com sucesso! Faça login agora.');
    document.getElementById('register-modal').style.display = 'none'; // Fecha o modal
  });
  