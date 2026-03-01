import React, { createContext, useContext, ReactNode } from 'react';

type AudioContextType = {
  // This context is kept minimal as we're using default phone sounds
  playNotificationSound: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

type AudioProviderProps = {
  children: ReactNode;
};

export const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
  const playNotificationSound = () => {
    // No-op as we're using the default phone notification sound
    // The expo-notifications library will handle playing the default sound
  };

  return (
    <AudioContext.Provider
      value={{
        playNotificationSound,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
