function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message === '') return;
  
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', 'sent');
  
  const userIcon = document.createElement('i');
  userIcon.classList.add('fa-regular', 'fa-circle-user');
  
  const messageText = document.createElement('span');
  messageText.textContent = message;
  
  messageElement.appendChild(userIcon);
  messageElement.appendChild(messageText);
  
  document.getElementById('chat-box').appendChild(messageElement);
  messageInput.value = '';
  document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}

document.getElementById('message-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') sendMessage();
});

function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const menuToggle = document.getElementById('menu-toggle');
  
  sidebar.classList.toggle('open');
  
  if (sidebar.classList.contains('open')) {
      menuToggle.style.display = 'none';
  } else {
      menuToggle.style.display = 'block';
  }
}