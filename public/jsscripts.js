// Simple navigation functions
function openChat(userName) {
    document.getElementById('home-view').classList.toggle('hidden');
    // document.getElementById('chat-view').classList.remove('hidden');
    document.getElementById('current-chat-name').innerText = userName;
    
    // Auto-scroll to bottom of chat
    const messagesContainer = document.getElementById('chat-messages');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function goHome() {
    // document.getElementById('chat-view').classList.add('hidden');
    document.getElementById('home-view').classList.toggle('hidden');
}

// Sending messages
function sendMessage() {
    const input = document.getElementById('message-input');
    const messageText = input.value.trim();

    if (messageText !== "") {
        const messagesContainer = document.getElementById('chat-messages');

        // Create message bubble
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sent');

        const textP = document.createElement('p');
        textP.innerText = messageText;

        const timeSpan = document.createElement('span');
        timeSpan.classList.add('time');
        const now = new Date();
        timeSpan.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageDiv.appendChild(textP);
        messageDiv.appendChild(timeSpan);

        // Add to chat
        messagesContainer.appendChild(messageDiv);

        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Clear input
        input.value = "";
    }
}

// Allow pressing "Enter" to send
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

async function sendMessage() {
    const input = document.getElementById('message-input');
    const messageText = input.value.trim();

    await fetch('/send-message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: messageText,
        }),
    });

    if (messageText !== "") {
        const messagesContainer = document.getElementById('chat-messages');

        // Create message bubble
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sent');

        const textP = document.createElement('p');
        textP.innerText = messageText;

        const timeSpan = document.createElement('span');
        timeSpan.classList.add('time');
        const now = new Date();
        timeSpan.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageDiv.appendChild(textP);
        messageDiv.appendChild(timeSpan);

        // Add to chat
        messagesContainer.appendChild(messageDiv);

        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Clear input
        input.value = "";
    }
}
