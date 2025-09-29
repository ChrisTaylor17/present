"use client";

import { useState } from 'react';
import { User, Edit3, Save } from 'lucide-react';

interface UserProfile {
  name: string;
  age: number;
  interests: string[];
  bio: string;
}

export function UserProfile() {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Anonymous User',
    age: 25,
    interests: ['DeFi', 'NFTs', 'AI'],
    bio: 'Exploring the future of decentralized connections'
  });

  const saveProfile = async () => {
    try {
      await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile)
      });
      setEditing(false);
    } catch (error) {
      console.error('Profile save failed:', error);
    }
  };

  return (
    <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <User className="text-purple-400" size={20} />
          <span className="text-white font-medium">Your Profile</span>
        </div>
        <button
          onClick={editing ? saveProfile : () => setEditing(true)}
          className="p-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors"
        >
          {editing ? <Save size={16} className="text-purple-300" /> : <Edit3 size={16} className="text-purple-300" />}
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-white/80 text-sm mb-2">Name</label>
          {editing ? (
            <input
              value={profile.name}
              onChange={(e) => setProfile({...profile, name: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white"
            />
          ) : (
            <p className="text-white">{profile.name}</p>
          )}
        </div>

        <div>
          <label className="block text-white/80 text-sm mb-2">Bio</label>
          {editing ? (
            <textarea
              value={profile.bio}
              onChange={(e) => setProfile({...profile, bio: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white resize-none h-20"
            />
          ) : (
            <p className="text-white/80">{profile.bio}</p>
          )}
        </div>

        <div>
          <label className="block text-white/80 text-sm mb-2">Interests</label>
          <div className="flex flex-wrap gap-2">
            {profile.interests.map((interest) => (
              <span
                key={interest}
                className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}