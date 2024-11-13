import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Gamepad, MessageSquare, Video, Users } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import VideoChat from './components/VideoChat';
import Channels from './components/Channels';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="flex min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">
          <Sidebar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/chat/:channelId" element={<Chat />} />
              <Route path="/video/:roomId" element={<VideoChat />} />
              <Route path="/channels" element={<Channels />} />
              <Route path="/" element={<Welcome />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

function Welcome() {
  return (
    <div className="glass p-8 max-w-2xl mx-auto mt-20 text-center">
      <h1 className="text-4xl font-bold mb-6 text-glow">Welcome to GameChat Hub</h1>
      <p className="text-gray-300 mb-8">Connect with gamers, share moments, and communicate in real-time</p>
      <div className="grid grid-cols-2 gap-6">
        <div className="glass-dark p-6">
          <Gamepad className="w-12 h-12 mb-4 mx-auto text-red-500" />
          <h2 className="text-xl font-semibold mb-2">Gaming Channels</h2>
          <p className="text-sm text-gray-400">Join game-specific channels</p>
        </div>
        <div className="glass-dark p-6">
          <Video className="w-12 h-12 mb-4 mx-auto text-yellow-500" />
          <h2 className="text-xl font-semibold mb-2">Video Chat</h2>
          <p className="text-sm text-gray-400">Stream and connect with friends</p>
        </div>
      </div>
    </div>
  );
}

export default App;