import React from "react";
import { useState, useEffect, useRef } from "react";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: "Hi there! I'm your Trade Assistant. How can I help you today?",
          },
        ]);
        setIsTyping(false);
      }, 800);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (userInput.trim() === "") return;

    const newMessage = {
      type: "user",
      text: userInput,
    };

    setMessages((prev) => [...prev, newMessage]);
    setUserInput("");
    setIsTyping(true);

    // Simulate bot reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: `You said: "${newMessage.text}". I'm still learning to respond better!`,
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbot-container">
      <button onClick={handleToggle} className="chatbot-toggle-button">
        <img
          src="https://mptradeportal.org/assets/images/avatar.png"
          alt="Chatbot Avatar"
          className="message-avatar-img"
        />
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Trade Assistant</span>
            <button className="close-btn" onClick={handleToggle}>
              ×
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${
                  msg.type === "user" ? "user-message" : "bot-message"
                }`}
              >
                <div className="message-content">{msg.text}</div>
              </div>
            ))}

            {isTyping && (
              <div className="bot-message typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
