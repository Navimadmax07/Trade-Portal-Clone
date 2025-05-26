/**
 * MPIDC Export Helpline Chatbot
 * JavaScript for the chatbot functionality
 */

(function () {
	// DOM Elements
	const chatbotToggleButton = document.getElementById("chatbot-toggle-button");
	const chatbotWindow = document.getElementById("chatbot-window");
	const closeButton = document.getElementById("close-button");
	const contactButton = document.getElementById("contact-button");
	const faqCards = document.querySelectorAll(".faq-card");
	const faqBackButton = document.getElementById("faq-back-button");
	const helpCards = document.querySelectorAll(".help-card");
	const helpBackButton = document.getElementById("help-back-button");
	const navHome = document.getElementById("nav-home");
	const navMessages = document.getElementById("nav-messages");
	const navHelp = document.getElementById("nav-help");
	const homeSection = document.getElementById("home-section");
	const chatSection = document.getElementById("chat-section");
	const helpSection = document.getElementById("help-section");
	const faqDetailSection = document.getElementById("faq-detail-section");
	const helpDetailSection = document.getElementById("help-detail-section");
	const chatForm = document.getElementById("chat-form");
	const chatInput = document.getElementById("chat-input");
	const messageList = document.getElementById("message-list");
	const messagesEndRef = document.getElementById("messages-end-ref");
	const languageSelect = document.getElementById("language-select");

	// State variables
	let isTyping = false;
	let activeSection = "home";
	let chatHistory = [];
	let welcomeMessagesDisplayed = false;

	// Initial setup
	function init() {
		bindEventListeners();
	}

	// Event listeners
	function bindEventListeners() {
		// Toggle chatbot visibility
		chatbotToggleButton.addEventListener("click", toggleChatbot);
		closeButton.addEventListener("click", closeChatbot);

		// Navigation
		contactButton.addEventListener("click", function () {
			navigateTo("messages");
		});

		navHome.addEventListener("click", function () {
			navigateTo("home");
		});

		navMessages.addEventListener("click", function () {
			navigateTo("messages");
		});

		navHelp.addEventListener("click", function () {
			navigateTo("help");
		});

		// FAQ interactions
		faqCards.forEach((card) => {
			card.addEventListener("click", function () {
				const faqIndex = this.dataset.faqIndex;
				showFaqDetail(faqIndex);
			});
		});

		faqBackButton.addEventListener("click", function () {
			hideElement(faqDetailSection);
			showElement(homeSection);
		});

		// Help interactions
		helpCards.forEach((card) => {
			card.addEventListener("click", function () {
				const helpIndex = this.dataset.helpIndex;
				showHelpDetail(helpIndex);
			});
		});

		helpBackButton.addEventListener("click", function () {
			hideElement(helpDetailSection);
			showElement(helpSection);
		});

		// Chat functionality
		chatForm.addEventListener("submit", function (e) {
			e.preventDefault();
			sendMessage();
		});

		// Language selection
		languageSelect.addEventListener("change", function () {
			changeLanguage(this.value);
		});
	}

	// Toggle chatbot visibility
	function toggleChatbot() {
		showElement(chatbotWindow);
		hideElement(chatbotToggleButton);

		// Show welcome messages if first time opening chat section
		if (activeSection === "messages" && !welcomeMessagesDisplayed) {
			displayWelcomeMessages();
		}
	}

	function closeChatbot() {
		hideElement(chatbotWindow);
		showElement(chatbotToggleButton);
	}

	// Navigation between sections
	function navigateTo(section) {
		// Update active section
		activeSection = section;

		// Hide all sections
		hideElement(homeSection);
		hideElement(chatSection);
		hideElement(helpSection);
		hideElement(faqDetailSection);
		hideElement(helpDetailSection);

		// Update nav buttons
		document.querySelectorAll(".nav-button").forEach((btn) => {
			btn.classList.remove("nav-button-active");
		});

		// Show appropriate section
		switch (section) {
			case "home":
				showElement(homeSection);
				navHome.classList.add("nav-button-active");
				break;
			case "messages":
				showElement(chatSection);
				navMessages.classList.add("nav-button-active");

				// Display welcome messages if not already shown
				if (!welcomeMessagesDisplayed) {
					displayWelcomeMessages();
				}

				// Scroll to bottom of chat
				scrollToBottom();
				break;
			case "help":
				showElement(helpSection);
				navHelp.classList.add("nav-button-active");
				break;
		}
	}

	// Show FAQ detail
	function showFaqDetail(index) {
		// Get FAQ data via AJAX
		$.ajax({
			url: BASE_URL + "chatbot/get_faq_detail",
			type: "GET",
			data: {
				index: index,
				language: CURRENT_LANGUAGE,
			},
			dataType: "json",
			success: function (response) {
				if (response.status === "success") {
					const faq = response.data;

					// Update FAQ detail content
					document.getElementById("faq-title").textContent = faq.question;
					document.getElementById("faq-answer").textContent = faq.answer;
					document.getElementById("faq-image").src = faq.image;
					document.getElementById("faq-image").alt = faq.question;

					// Show FAQ detail section
					hideElement(homeSection);
					showElement(faqDetailSection);
				}
			},
			error: function () {
				console.error("Error loading FAQ detail");
			},
		});
	}

	// Show Help detail
	function showHelpDetail(index) {
		// Get Help data via AJAX
		$.ajax({
			url: BASE_URL + "chatbot/get_help_detail",
			type: "GET",
			data: {
				index: index,
				language: CURRENT_LANGUAGE,
			},
			dataType: "json",
			success: function (response) {
				if (response.status === "success") {
					const help = response.data;

					// Update Help detail content
					document.getElementById("help-title").textContent = help.title;
					document.getElementById("help-content").innerHTML =
						help.content.replace(
							/\[(.*?)\]\((.*?)\)/g,
							'<a href="$2" target="_blank">$1</a>'
						);
					document.getElementById("help-image").src = help.image;
					document.getElementById("help-image").alt = help.title;

					// Show Help detail section
					hideElement(helpSection);
					showElement(helpDetailSection);
				}
			},
			error: function () {
				console.error("Error loading Help detail");
			},
		});
	}

	// Chat functionality
	// function sendMessage() {
	// 	const message = chatInput.value.trim();

	// 	if (!message) return;

	// 	// Add user message to chat
	// 	addMessage("user", message);

	// 	// Clear input
	// 	chatInput.value = "";

	// 	// Show typing indicator
	// 	showTypingIndicator();

	// 	// Send message to server
	// 	$.ajax({
	// 		url: BASE_URL + "chatbot/send_message",
	// 		type: "POST",
	// 		data: {
	// 			message: message,
	// 			language: CURRENT_LANGUAGE,
	// 		},
	// 		dataType: "json",
	// 		success: function (response) {
	// 			// Hide typing indicator
	// 			hideTypingIndicator();

	// 			if (response.status === "success") {
	// 				// Add bot response to chat
	// 				addMessage("bot", response.message, response.timestamp);
	// 			} else {
	// 				// Add error message
	// 				const errorMsg =
	// 					CURRENT_LANGUAGE === "hi"
	// 						? "क्षमा करें, मुझे एक त्रुटि का सामना करना पड़ा। कृपया पुनः प्रयास करें।"
	// 						: "Sorry, I encountered an error. Please try again.";

	// 				addMessage("bot", errorMsg);
	// 			}
	// 		},
	// 		error: function () {
	// 			// Hide typing indicator
	// 			hideTypingIndicator();

	// 			// Add error message
	// 			const errorMsg =
	// 				CURRENT_LANGUAGE === "hi"
	// 					? "क्षमा करें, मुझे एक त्रुटि का सामना करना पड़ा। कृपया पुनः प्रयास करें।"
	// 					: "Sorry, I encountered an error. Please try again.";

	// 			addMessage("bot", errorMsg);
	// 		},
	// 	});
	// }
	function sendMessage() {
		const message = chatInput.value.trim();

		if (!message) return;

		// Add user message to chat
		addMessage("user", message);

		// Clear input
		chatInput.value = "";

		// Show typing indicator
		showTypingIndicator();

		// Debug - log what we're sending
		console.log("Sending message:", {
			message: message,
			language: CURRENT_LANGUAGE,
		});

		// Send message to server
		$.ajax({
			url: BASE_URL + "chatbot/send_message",
			type: "POST",
			data: {
				message: message,
				language: CURRENT_LANGUAGE,
			},
			dataType: "json",
			success: function (response) {
				// Hide typing indicator
				hideTypingIndicator();

				// Debug - log the response
				console.log("Server response:", response);

				if (response.status === "success") {
					// Add bot response to chat
					addMessage("bot", response.message, response.timestamp);
				} else {
					// Add error message
					const errorMsg =
						CURRENT_LANGUAGE === "hi"
							? "क्षमा करें, मुझे एक त्रुटि का सामना करना पड़ा। कृपया पुनः प्रयास करें।"
							: "Sorry, I encountered an error. Please try again.";

					addMessage("bot", errorMsg);
				}
			},
			error: function (xhr, status, error) {
				// Hide typing indicator
				hideTypingIndicator();

				// Debug - log the error
				console.error("AJAX error:", {
					status: status,
					error: error,
					response: xhr.responseText,
				});

				// Add error message
				const errorMsg =
					CURRENT_LANGUAGE === "hi"
						? "क्षमा करें, मुझे एक त्रुटि का सामना करना पड़ा। कृपया पुनः प्रयास करें।"
						: "Sorry, I encountered an error. Please try again.";

				addMessage("bot", errorMsg);
			},
		});
	}

	// Add a message to the chat
	function addMessage(sender, text, timestamp = null) {
		// Create message elements
		const messageDiv = document.createElement("div");
		messageDiv.className = `message message-${sender}`;

		// Only add avatar for bot messages
		if (sender === "bot") {
			const avatarDiv = document.createElement("div");
			avatarDiv.className = "message-avatar";

			const avatarImg = document.createElement("img");
			avatarImg.src = BASE_URL + "assets/images/avatar.png";
			avatarImg.alt = "Bot Avatar";
			avatarImg.className = "message-avatar-img";

			avatarDiv.appendChild(avatarImg);
			messageDiv.appendChild(avatarDiv);
		}

		const contentDiv = document.createElement("div");
		contentDiv.className = `message-content message-content-${sender}`;

		const textP = document.createElement("p");
		textP.className = "message-text";
		textP.textContent = text;

		const timeSpan = document.createElement("span");
		timeSpan.className = "message-time";

		if (timestamp) {
			timeSpan.textContent = timestamp;
		} else {
			timeSpan.textContent = new Date().toLocaleTimeString([], {
				hour: "2-digit",
				minute: "2-digit",
			});
		}

		contentDiv.appendChild(textP);
		contentDiv.appendChild(timeSpan);
		messageDiv.appendChild(contentDiv);

		// Add message to the chat
		messageList.insertBefore(messageDiv, messagesEndRef);

		// Update chat history
		chatHistory.push({
			role: sender === "user" ? "user" : "assistant",
			content: text,
		});

		// Scroll to the new message
		scrollToBottom();
	}

	// Show typing indicator
	function showTypingIndicator() {
		if (isTyping) return;

		isTyping = true;

		const typingDiv = document.createElement("div");
		typingDiv.className = "message message-bot";
		typingDiv.id = "typing-indicator-container";

		const avatarDiv = document.createElement("div");
		avatarDiv.className = "message-avatar";

		const avatarImg = document.createElement("img");
		avatarImg.src = BASE_URL + "assets/images/avatar.png";
		avatarImg.alt = "Bot Avatar";
		avatarImg.className = "message-avatar-img";

		avatarDiv.appendChild(avatarImg);

		const indicatorDiv = document.createElement("div");
		indicatorDiv.className = "typing-indicator";

		for (let i = 0; i < 3; i++) {
			const dot = document.createElement("span");
			dot.className = "typing-dot";
			indicatorDiv.appendChild(dot);
		}

		typingDiv.appendChild(avatarDiv);
		typingDiv.appendChild(indicatorDiv);

		messageList.insertBefore(typingDiv, messagesEndRef);

		scrollToBottom();
	}

	// Hide typing indicator
	function hideTypingIndicator() {
		isTyping = false;

		const typingIndicator = document.getElementById(
			"typing-indicator-container"
		);
		if (typingIndicator) {
			typingIndicator.remove();
		}
	}

	// Display welcome messages with delay
	function displayWelcomeMessages() {
		welcomeMessagesDisplayed = true;

		if (!TRANSLATIONS || !TRANSLATIONS.welcomeMessages) {
			console.error("TRANSLATIONS or welcomeMessages is not defined");
			return; // Exit the function if welcomeMessages is missing
		}
		const welcomeMessages = TRANSLATIONS.welcomeMessages;
		let delay = 0;

		welcomeMessages.forEach((msg, index) => {
			setTimeout(() => {
				if (index < welcomeMessages.length - 1) {
					addMessage("bot", msg.text);
				} else {
					// For last message, show typing indicator first
					showTypingIndicator();

					setTimeout(() => {
						hideTypingIndicator();
						addMessage("bot", msg.text);
					}, TYPING_INDICATOR_DELAY);
				}
			}, delay);

			delay += INITIAL_MESSAGES_DELAY;
		});
	}

	// Change language
	function changeLanguage(language) {
		// Submit language change via form post
		const form = document.createElement("form");
		form.method = "post";
		form.action = BASE_URL + "Chatbot/change_language";
		form.style.display = "none";

		const input = document.createElement("input");
		input.type = "hidden";
		input.name = "language";
		input.value = language;

		form.appendChild(input);
		document.body.appendChild(form);
		form.submit();
	}

	// Utility functions
	function showElement(element) {
		if (element) {
			element.style.display = "";
		}
	}

	function hideElement(element) {
		if (element) {
			element.style.display = "none";
		}
	}

	function scrollToBottom() {
		messagesEndRef.scrollIntoView({ behavior: "smooth" });
	}

	// Initialize on DOM load
	document.addEventListener("DOMContentLoaded", init);
})();
