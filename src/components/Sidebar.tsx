import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageSquare, Video, Users, LogOut } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="glass-dark w-20 min-h-screen p-4 flex flex-col items-center gap-8">
      <Link to="/" className="p-3 rounded-lg hover:bg-red-500/20 transition-colors">
        <Home className={`w-6 h-6 ${location.pathname === '/' ? 'text-red-500' : 'text-gray-400'}`} />
      </Link>
      
      <Link to="/channels" className="p-3 rounded-lg hover:bg-red-500/20 transition-colors">
        <MessageSquare className={`w-6 h-6 ${location.pathname.includes('/chat') ? 'text-red-500' : 'text-gray-400'}`} />
      </Link>
      
      <Link to="/video" className="p-3 rounded-lg hover:bg-red-500/20 transition-colors">
        <Video className={`w-6 h-6 ${location.pathname.includes('/video') ? 'text-red-500' : 'text-gray-400'}`} />
      </Link>
      
      <div className="flex-1" />
      
      <button className="p-3 rounded-lg hover:bg-red-500/20 transition-colors">
        <LogOut className="w-6 h-6 text-gray-400" />
      </button>
    </div>
  );
};

export default Sidebar;