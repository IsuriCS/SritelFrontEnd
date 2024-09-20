import React, { useState } from 'react';
import '../../css/agentCustomer/support.css';

function AgentSupport() {
  const [messages, setMessages] = useState([
    'Hello!',
    'Hi there!',
    'How are you?',
    'I am good, thanks!',
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') {
      return;
    }
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div className="chat-window">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default AgentSupport;

