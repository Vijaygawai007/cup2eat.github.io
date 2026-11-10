import React, { useState } from 'react';
import { Instagram, Play, Heart, MessageCircle, ExternalLink, Sparkles, Volume2 } from 'lucide-react';
import { INSTAGRAM_REELS } from '../data/cupData';
import { playCrunchSound } from '../utils/audio';

export const InstagramFeed: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/cup2eat?xtok=aXptcjEwMmplemVl";
  const [activeReel, setActiveReel] = useState<string | null>(null);

  const handlePlayReel = (reelId: string) => {
    playCrunchSound();
    setActiveReel(activeReel === reelId ? null : reelId);
  };

  return (
    <section id="instagram-reels" className="py-20 bg-[#FAF7F2] border-t border-[#E8DFC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Instagram Profile Card Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DFC8] shadow-md mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            {/* Instagram Avatar with Story Ring */}
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 shadow-lg">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white p-1">
                <img
                  src="/src/assets/images/cup2eat_hero_cup_1794317046023.jpg"
                  alt="@cup2eat on Instagram"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-black text-2xl text-[#2B1B14]">
                  cup2eat
                </h3>
                <span className="w-4 h-4 rounded-full bg-sky-500 text-white flex items-center justify-center text-[10px] font-black">
                  ✓
                </span>
              </div>
              <p className="text-xs text-stone-500 font-mono mt-0.5">
                Official Account • 100% Edible Wafer Cups
              </p>
              <div className="flex items-center gap-4 mt-2 text-xs font-bold text-[#4A3E36]">
                <span><strong className="text-[#2B1B14] font-black">240</strong> Posts</span>
                <span><strong className="text-[#2B1B14] font-black">128K</strong> Followers</span>
                <span><strong className="text-[#2B1B14] font-black">5.2M</strong> Views</span>
              </div>
            </div>
          </div>

          {/* Follow CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white font-extrabold px-6 py-3 rounded-2xl text-sm shadow-md hover:shadow-lg transition cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @cup2eat on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#FAF7F2] hover:bg-stone-200/60 text-[#2B1B14] border border-[#E8DFC8] font-bold px-4 py-3 rounded-2xl text-xs transition"
            >
              <span>Send Instagram DM</span>
            </a>
          </div>
        </div>

        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-[#E87332] uppercase tracking-wider">
              Trending Viral Content
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#2B1B14] font-heading mt-1">
              Watch the Crunch on Reels
            </h2>
          </div>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#E87332] hover:underline flex items-center gap-1"
          >
            <span>View All Reels on Instagram</span>
            <span>→</span>
          </a>
        </div>

        {/* Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_REELS.map((reel) => {
            const isPlaying = activeReel === reel.id;

            return (
              <div
                key={reel.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group relative"
              >
                {/* Reel Video Thumbnail */}
                <div className="relative aspect-[9/13] overflow-hidden bg-black">
                  <img
                    src={reel.image}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 pointer-events-none" />

                  {/* Top Stats */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between text-white text-xs">
                    <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full font-mono text-[10px] flex items-center gap-1">
                      <Play className="w-2.5 h-2.5 fill-white" /> {reel.views}
                    </span>
                    <span className="bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-mono">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <button
                    onClick={() => handlePlayReel(reel.id)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/25 hover:bg-white/40 backdrop-blur-md text-white flex items-center justify-center border-2 border-white/60 shadow-xl cursor-pointer group-hover:scale-110 transition-transform"
                    aria-label={`Play reel: ${reel.title}`}
                  >
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </button>

                  {/* If Playing Simulation Message */}
                  {isPlaying && (
                    <div className="absolute inset-0 bg-black/90 p-4 flex flex-col justify-center items-center text-center text-white space-y-3 animate-in fade-in">
                      <div className="w-10 h-10 rounded-full bg-[#E87332] flex items-center justify-center animate-bounce">
                        <Volume2 className="w-5 h-5" />
                      </div>
                      <p className="text-xs font-bold text-amber-200">
                        *CRUNCH SOUND EFFECT PLAYED*
                      </p>
                      <p className="text-xs text-stone-300">
                        Watch original reel audio & commentary directly on Instagram:
                      </p>
                      <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-[#E87332] text-white px-3.5 py-1.5 rounded-xl text-xs font-bold"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        <span>Open in Instagram</span>
                      </a>
                    </div>
                  )}

                  {/* Bottom Info on Video */}
                  <div className="absolute bottom-3 inset-x-3 text-white pointer-events-none">
                    <p className="text-[11px] font-mono text-amber-300 font-bold mb-0.5">
                      {reel.username}
                    </p>
                    <h4 className="font-heading font-bold text-sm leading-snug line-clamp-2">
                      {reel.title}
                    </h4>
                  </div>
                </div>

                {/* Caption & Interaction Row */}
                <div className="p-4 bg-white flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-[#5E5146] line-clamp-2 leading-relaxed">
                    {reel.caption}
                  </p>

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-red-500 font-semibold">
                        <Heart className="w-3.5 h-3.5 fill-red-500" />
                        {reel.likes}
                      </span>
                      <span className="flex items-center gap-1 text-stone-400">
                        <MessageCircle className="w-3.5 h-3.5" />
                        Comments
                      </span>
                    </div>

                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E87332] hover:text-[#2B1B14] font-bold inline-flex items-center gap-0.5 text-xs"
                    >
                      <span>Watch</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
