"use client";

import { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m your AI assistant. I can help you find matches, create NFTs, and navigate the CONSILIENCE platform.',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput })
      });
      
      const data = await response.json();
      
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Sorry, I\'m having trouble connecting right now.',
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    }
  };

  const getAIResponse = (userInput: string): string => {
    const responses = [
      "I can help you find compatible matches based on your interests and blockchain activity.",
      "Would you like me to generate a unique NFT for you? I can create art based on your personality.",
      "Let me analyze your Solana wallet activity to suggest better connections.",
      "I'm here to assist with any questions about the CONSILIENCE platform!"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-4 h-96 flex flex-col">
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/10">
        <Bot className="text-purple-400" size={20} />
        <span className="text-white font-medium">AI Assistant</span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-2 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start gap-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
              <div className={`p-2 rounded-lg ${
                message.sender === 'user' 
                  ? 'bg-purple-500/20 text-purple-100' 
                  : 'bg-white/10 text-white/90'
              }`}>
                {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-purple-500/30 text-white'
                  : 'bg-white/5 text-white/80'
              }`}>
                {message.text}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Ask AI anything..."
          className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:border-purple-400"
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-purple-500 hover:bg-purple-600 rounded-lg transition-colors"
        >
          <Send size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
}