import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Video } from 'expo-av';
const VideoPlayerNorthIndian = ({ onVideoEnd }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      setIsPlaying(false);
      onVideoEnd();
    }
  };

  const handleTogglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <View style={styles.container}>
      <Video
  source={require('../../assets/videos/RajmaChawal.mp4')}
  rate={1.0}
  volume={1.0}
  isMuted={false}
  resizeMode="cover"
  shouldPlay={isPlaying}
  onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
  style={styles.video}
/>

      <TouchableOpacity onPress={handleTogglePlayPause} style={[styles.playPauseButton, isPlaying ? styles.pauseButton : styles.playButton]}>
        <Text style={styles.playPauseButtonText}>{isPlaying ? 'Pause' : 'Play'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  playPauseButton: {
  position: 'absolute',
  bottom: 16,
  alignSelf: 'center',
  width: 80,
  height: 36,
  borderRadius: 18,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  justifyContent: 'center',
  alignItems: 'center',
},


  playButton: {
    backgroundColor: 'green',
  },
  pauseButton: {
    backgroundColor: 'red',
  },
  playPauseButtonText: {
    fontSize: 24,
    color: 'white',
  },
});

export default VideoPlayerNorthIndian;