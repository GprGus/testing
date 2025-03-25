// script.js
function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
  
    // Verifica se a mensagem não está vazia
    if (message.trim() === '') {
      return; // Não faz nada se a mensagem estiver vazia
    }
  
    // Cria um novo elemento de mensagem
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
  
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
  