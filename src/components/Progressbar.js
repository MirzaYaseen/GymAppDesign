import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';

const AdjustableProgressBar = () => {
  const [progress, setProgress] = useState(50);

  const progressBarRef = useRef(null);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const { moveX } = gestureState;
        if (progressBarRef.current) {
          const progressBarWidth = progressBarRef.current.offsetWidth;
          const newProgress = (moveX / progressBarWidth) * 100;
          setProgress(Math.max(0, Math.min(100, newProgress)));
        }
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <View
        ref={progressBarRef}
        style={styles.progressBarContainer}
        {...panResponder.panHandlers}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  progressBarContainer: {
    width: '100%',
    height: 15,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 5,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#5951FF',
    justifyContent: 'center',
    borderRadius: 10,
  },
  progressText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#949494',
  },
});

export default AdjustableProgressBar;
