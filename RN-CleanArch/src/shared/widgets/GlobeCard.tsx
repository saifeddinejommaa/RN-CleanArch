import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';

type CardProps = {
  child: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};
export const GlobeCard = ({ child, style }: CardProps) => {
  return <View style={[style, styles.card]}>{child}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,

    elevation: 5,
  },
});