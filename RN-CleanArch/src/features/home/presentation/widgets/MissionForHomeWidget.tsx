import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { GlobeCard } from '../../../../shared/widgets/GlobeCard';

type Props = {
  campainName: string;
  logo: string;
  occupationLabel: string;
};

export const MissionForHomeItemWidget = ({
  campainName,
  logo,
  occupationLabel,
}: Props) => {
  return (
    <GlobeCard
      child={
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: logo }} />
          <View style={styles.detailsContainer}>
            <Text>{campainName}</Text>
            <Text>{occupationLabel}</Text>
          </View>
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  detailsContainer: {
    marginLeft: 12,
    flexShrink: 1,
  },
  image: {
    height: 50,
    width: 80,
    borderRadius: 8,
  },
});
