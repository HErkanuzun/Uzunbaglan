import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Send, Smile, Image as ImageIcon } from 'lucide-react';
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [showEmoji, setShowEmoji] = useState(false);
  const { channelId } = useParams();

  return (
    <div className="h-[calc(100vh-2rem)] glass">
      <div className="p-4 border-b border-white/10">
        <h2 className="text-xl font-semibold text-glow">Channel Name</h2>
      </div>

      <div className="h-[calc(100%-8rem)] overflow-y-auto p-4">
        {/* Messages will be rendered here */}
        <div className="glass-dark p-4 mb-4 max-w-[80%]">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-red-500" />
            <span className="font-semibold">Username</span>
            <span className="text-xs text-gray-400">12:34 PM</span>
          </div>
          <p className="text-gray-200">Message content goes here</p>
        </div>
      </div>

      <div className="h-16 border-t border-white/10 p-2">
        <div className="relative flex items-center gap-2">
          <button 
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setShowEmoji(!showEmoji)}
          >
            <Smile className="w-6 h-6 text-yellow-500" />
          </button>
          
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <ImageIcon className="w-6 h-6 text-red-500" />
          </button>
          
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 bg-white/5 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Type a message..."
          />
          
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Send className="w-6 h-6 text-red-500" />
          </button>
          
          {showEmoji && (
            <div className="absolute bottom-full right-0 mb-2">
              <EmojiPicker onEmojiClick={(emoji) => setMessage(prev => prev + emoji.emoji)} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;