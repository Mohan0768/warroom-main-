'use client'

import { useEffect, useRef } from 'react'

export function WarRoomAudio() {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Autoplay was prevented, which is fine
        // Users can click to play if they want
      })
    }
  }, [])

  return (
    <>
      <audio
        ref={audioRef}
        src="/war-thunder.mp3"
        autoPlay
        loop
        preload="auto"
        className="hidden"
      />
      
      {/* Audio Control Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => {
            if (audioRef.current) {
              if (audioRef.current.paused) {
                audioRef.current.play()
              } else {
                audioRef.current.pause()
              }
            }
          }}
          className="flex items-center justify-center w-12 h-12 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full shadow-lg transition-all duration-300 hover:scale-110 font-bold text-lg"
          title="Toggle music"
        >
          🎵
        </button>
      </div>
    </>
  )
}
