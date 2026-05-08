import { useVideoPlayer, VideoView } from 'expo-video';

export default function LoopedVideo() {
  const player = useVideoPlayer(
    require('../../../assets/videos/montage_globe_app.mp4'),
    (player) => {
      player.loop = true;
      player.play();
    },
  );
  return <VideoView player={player} />;
}
