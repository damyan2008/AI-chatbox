// Define some responses for the bot
const responses = [
	"Sorry, I don't understand.",
	"Can you rephrase that?",
	"That's interesting. Tell me more."
];

function send() {
	// Get user input
	const userInput = document.getElementById("userinput").value;

	// Clear input field
	document.getElementById("userinput").value = "";

	// Add user input to chat box
	const chatbox = document.getElementById("chatbox");
	const userMessage = document.createElement("p");
	userMessage.innerHTML = `You: ${userInput}`;
	chatbox.appendChild(userMessage);

	// Get a random response from the bot and add it to the chat box

	let botResponse = "";

	if(userInput == "Hi" || userInput == "Hello" || userInput == "Hey" || userInput == "hi" || userInput == "hello" || userInput == "hey"){
		botResponse = "Hello! How can I help you?";
	}else{
		botResponse = responses[Math.floor(Math.random() * responses.length)];
	}

	const botMessage = document.createElement("p");
	botMessage.innerHTML = `Bot: ${botResponse}`;
	chatbox.appendChild(botMessage);
}