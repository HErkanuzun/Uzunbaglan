import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Hash, Users } from 'lucide-react';

const Channels = () => {
  const channels = [
    { id: '1', name: 'Valorant', members: 156, active: true },
    { id: '2', name: 'CS2', members: 89 },
    { id: '3', name: 'League of Legends', members: 234 },
  ];

  return (
    <div className="h-[calc(100vh-2rem)] glass">
      <div className="p-4 border-b border-white/10 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-glow">Gaming Channels</h2>
        <button className="btn-primary flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Channel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {channels.map(channel => (
          <Link
            key={channel.id}
            to={`/chat/${channel.id}`}
            className={`glass-dark p-6 transition-all hover:scale-105 ${
              channel.active ? 'border-red-500' : ''
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <Hash className={`w-6 h-6 ${channel.active ? 'text-red-500' : 'text-gray-400'}`} />
              <h3 className="text-lg font-semibold">{channel.name}</h3>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Users className="w-4 h-4" />
              <span>{channel.members} members</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Channels;