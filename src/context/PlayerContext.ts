import { createContext } from 'react'

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: string;
  url: string;
}

type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
  play: (episode: Episode) => void;
}

export const PlayerContext = createContext({} as PlayerContextData)