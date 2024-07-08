// Password check function
function checkPassword() {
    var password = document.getElementById("passwordInput").value.trim();
    var passwordMessage = document.getElementById("passwordMessage");
    
    if (password === "tubask") {
        passwordMessage.textContent = "";
        document.getElementById("passwordSection").style.display = "none";
        document.getElementById("usernameSection").style.display = "block";
    } else {
        passwordMessage.textContent = "Incorrect password. Please try again.";
    }
}

// Set username function
function setUsername() {
    var username = document.getElementById("usernameInput").value.trim();
    
    if (username !== "") {
        document.getElementById("usernameSection").style.display = "none";
        document.getElementById("chatSection").style.display = "block";
        // You can implement further actions here after setting the username
    }
}

// Send message function
function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value.trim();
    
    if (message !== "") {
        // You can handle sending the message here
        messageInput.value = "";
        // Example: Append message to the chat window
        var messagesDiv = document.getElementById("messages");
        messagesDiv.innerHTML += `<div><strong>${getUsername()}:</strong> ${message}</div>`;
        messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to bottom of messages
    }
}

// Function to get username (you can modify this according to how you handle usernames)
function getUsername() {
    return document.getElementById("usernameInput").value.trim();
}
