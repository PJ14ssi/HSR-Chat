function addMessage(username, message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message-row');
    messageElement.setAttribute('data-role', 'broadcaster');
    messageElement.setAttribute('data-username', isUser ? 'User' : 'Bot');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');

    const usernameElement = document.createElement('span');
    usernameElement.classList.add('username');
    usernameElement.textContent = username;

    const textElement = document.createElement('span');
    textElement.classList.add('text');
    textElement.textContent = message;

    messageContent.appendChild(usernameElement);
    messageContent.appendChild(textElement);

    messageElement.appendChild(messageContent);

    // Prepend the message element to the chatbox
    chatbox.insertBefore(messageElement, chatbox.firstChild);

    // Remove excess messages if the limit is reached
    const messages = chatbox.getElementsByClassName('message-row');
    if (messages.length > messagesLimit) {
      chatbox.removeChild(messages[messages.length - 1]);
    }

    // Scroll to the bottom of the chatbox
    chatbox.scrollTop += messageElement.offsetHeight;
  }

  // Function to scroll to the bottom of the chatbox
  function scrollToBottom() {
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  // Function to handle sending a message
  function sendMessage() {
    const message = messageInput.value.trim();
    if (message !== '') {
      const username = 'User'; // Set the username to the user's name or any desired value

      // Split the message into individual lines
      const lines = message.split('\n');

      // Add each line of the message with a delay
      lines.forEach((line, index) => {
        setTimeout(() => {
          addMessage(username, line, true);
          scrollToBottom();

          // If it's the last line of the message, simulate bot response
          if (index === lines.length - 1) {
            setTimeout(() => {
              const botUsername = 'Bot';
              const botMessage = 'You achieved copium. KEKW';
              addMessage(botUsername, botMessage, false);
              scrollToBottom();
            }, 1000); // Wait for 1 second before showing the bot response
          }
        }, index * 500); // Delay each line by 500 milliseconds
      });

      messageInput.value = '';
    }
  }

  const chatbox = document.getElementById('chatbox');
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById('sendButton');

  chatbox.addEventListener('scroll', function() {
    const isScrolling = chatbox.scrollHeight - chatbox.scrollTop !== chatbox.clientHeight;
    if (!isScrolling) {
      const botUsername = 'Bot';
      const botMessage = 'Message no longer squished. Achieved giga-copium.';
      addMessage(botUsername, botMessage, false);
      scrollToBottom();
    }
  });

  sendButton.addEventListener('click', sendMessage);
  messageInput.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
  event.preventDefault();
  sendMessage();
}
});
  
function sendMessage() {
const message = messageInput.value.trim();
if (message !== '') {
  const username = 'User'; // Set the username to the user's name or any desired value

  // Split the message into individual lines
  const lines = message.split('\n');

  // Add each line of the message with a delay
  lines.forEach((line, index) => {
    setTimeout(() => {
      addMessage(username, line, true);
      scrollToBottom();

      // If it's the last line of the message, simulate bot response
      if (index === lines.length - 1) {
        setTimeout(() => {
          const botUsername = 'Bot';
          const botMessage = 'You achieved copium. KEKW';
          addMessage(botUsername, botMessage, false);
          scrollToBottom();
        }, 1000); // Wait for 1 second before showing the bot response
      }
    }, index * 500); // Delay each line by 500 milliseconds
  });

  messageInput.value = '';
}
}
  messagesLimit = 100;
  let channelName = '';
  let emulateNames = false;

  window.addEventListener('onWidgetLoad', function(obj) {
    const fieldData = obj.detail.fieldData;
    channelName = obj.detail.channel.username;
    emulateNames = fieldData.emulateNames;

    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = `
      /* CSS code... */

      /* Debug message styles */
      .chatbox .message-row[data-username="Bot"] .message-content {
        background: lightblue;
        color: black;
      }
    `;

    document.head.appendChild(css);

    // Set the channel name as the username for the user's messages
    if (channelName === '') {
      channelName = 'User';
    }
  });
