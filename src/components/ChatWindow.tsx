// ChatWindow.tsx
import React, { useState, useEffect } from 'react';
import './ChatWindow.css'; 

interface ChatMessage {
  user: string;
  message: string;
}

interface ChatWindowProps {
  onSendMessage: (message: string) => void;
  messages: ChatMessage[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onSendMessage, messages }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.user}:</strong> {msg.message}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
