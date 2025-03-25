// script.js
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value;

  // Verifica se a mensagem não está vazia
  if (message.trim() === '') {
    return; // Não faz nada se a mensagem estiver vazia
  }

  // Cria a div principal da mensagem
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'sent'); // Adiciona a classe 'sent' para posicionar à direita
  
  // Cria o ícone de usuário (Font Awesome)
  const userIcon = document.createElement('i');
  userIcon.classList.add('fa-regular', 'fa-circle-user'); // Adiciona as classes do ícone
  
  // Cria o texto da mensagem
  const messageText = document.createElement('span');
  messageText.textContent = message; // A mensagem digitada

  // Adiciona o ícone e o texto da mensagem na div
  messageElement.appendChild(userIcon);
  messageElement.appendChild(messageText);

  // Adiciona a nova mensagem ao chat
  const chatBox = document.getElementById('chat-box');
  chatBox.appendChild(messageElement);

  // Limpa o campo de entrada de texto
  messageInput.value = '';

  // Rola para o final do chat para ver a última mensagem
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Adiciona um "Enter" para enviar a mensagem
document.getElementById('message-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});
