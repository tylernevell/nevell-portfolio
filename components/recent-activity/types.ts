type SongType = {
  songUrl: string;
  artist: string;
  title: string;
  image: {
    height: number;
    url: string;
    width: number;
  };
};

type CurrentlyPlayingSongType = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

type TopTracksType = {
  tracks: SongType[];
};

type CurrentlyPlayingType = {
  track: CurrentlyPlayingSongType;
};

type RecentActivityPropsType = {
  data: TopTracksType | undefined;
  title: string;
};

type CurrentlyPlayingPropsType = {
  title: string;
};

export type {
  RecentActivityPropsType,
  CurrentlyPlayingType,
  CurrentlyPlayingSongType,
  CurrentlyPlayingPropsType,
  SongType,
  TopTracksType,
};
