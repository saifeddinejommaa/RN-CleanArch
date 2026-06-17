import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect } from 'react';
import { StyleSheet } from 'react-native';

export default function LoopedVideo() {
  const player = useVideoPlayer(
    require('../../../assets/videos/montage_globe_app.mp4')
  );

  useEffect(() => {
    player.loop = true;
    player.play();
  }, [player]);

  return (
    <VideoView
      style={styles.video}
      contentFit="cover"
      player={player}
    />
  );
}

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
});