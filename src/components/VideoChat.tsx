import React, { useState } from 'react';
import Webcam from 'react-webcam';
import { Mic, MicOff, Video, VideoOff, Users, MessageSquare } from 'lucide-react';

const VideoChat = () => {
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="h-[calc(100vh-2rem)] glass flex">
      <div className={`flex-1 ${showChat ? 'w-3/4' : 'w-full'}`}>
        <div className="p-4 border-b border-white/10">
          <h2 className="text-xl font-semibold text-glow">Gaming Session</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="relative glass-dark rounded-lg overflow-hidden">
            <Webcam
              audio={false}
              mirrored
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4">
              <span className="text-sm bg-black/50 px-2 py-1 rounded">You</span>
            </div>
          </div>
          {/* Additional participant slots */}
          <div className="glass-dark rounded-lg flex items-center justify-center">
            <Users className="w-12 h-12 text-gray-500" />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-4 glass-dark p-4 rounded-full">
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              className={`p-3 rounded-full ${audioEnabled ? 'bg-red-500' : 'bg-gray-700'}`}
            >
              {audioEnabled ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
            </button>
            
            <button
              onClick={() => setVideoEnabled(!videoEnabled)}
              className={`p-3 rounded-full ${videoEnabled ? 'bg-red-500' : 'bg-gray-700'}`}
            >
              {videoEnabled ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
            </button>
            
            <button
              onClick={() => setShowChat(!showChat)}
              className="p-3 rounded-full hover:bg-red-500/20"
            >
              <MessageSquare className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {showChat && (
        <div className="w-1/4 border-l border-white/10">
          <Chat />
        </div>
      )}
    </div>
  );
};

export default VideoChat;