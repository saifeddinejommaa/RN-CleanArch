import React, { useRef, useState } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

type ScrollableHeaderScreenProps = {
  child: React.ReactNode;
};

export const ScrollableHeaderScreen: React.FC<ScrollableHeaderScreenProps> = ({
  child,
}: ScrollableHeaderScreenProps) => {
  const scrollY = useRef(
    new Animated.Value(Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0),
  ).current;

  const [refreshing, setRefreshing] = useState(false);

  const renderScrollViewContent = () => {
    return <View style={styles.scrollViewContent}>{child}</View>;
  };

  const scrollYAdjusted = Animated.add(
    scrollY,
    Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
  );

  const headerTranslate = scrollYAdjusted.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollYAdjusted.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const imageTranslate = scrollYAdjusted.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollYAdjusted.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.8],
    extrapolate: 'clamp',
  });

  const titleTranslate = scrollYAdjusted.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, -8],
    extrapolate: 'clamp',
  });

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <View style={styles.fill}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="rgba(0,0,0,0.25)"
      />

      <Animated.ScrollView
        style={styles.fill}
        scrollEventThrottle={1}
        onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
          useNativeDriver: true,
        })}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={HEADER_MAX_HEIGHT}
          />
        }
        contentInset={{
          top: HEADER_MAX_HEIGHT,
        }}
        contentOffset={{
          y: -HEADER_MAX_HEIGHT,
          x: 0,
        }}
      >
        {renderScrollViewContent()}
      </Animated.ScrollView>

      <Animated.View
        pointerEvents="none"
        style={[styles.header, { transform: [{ translateY: headerTranslate }] }]}
      >
        <Animated.Image
          style={[
            styles.backgroundImage,
            {
              opacity: imageOpacity,
              transform: [{ translateY: imageTranslate }],
            },
          ]}
          source={require('../../../assets/images/my_globe_home_header.jpg')}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.bar,
          {
            transform: [{ scale: titleScale }, { translateY: titleTranslate }],
          },
        ]}
      >
        <Text style={styles.title}>Title</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
    height: HEADER_MAX_HEIGHT,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: undefined,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  bar: {
    backgroundColor: 'transparent',
    marginTop: Platform.OS === 'ios' ? 28 : 38,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: 'white',
    fontSize: 18,
  },
  scrollViewContent: {
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});