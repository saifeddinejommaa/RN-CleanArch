import React from 'react';
import { Text, View } from 'react-native';
import CurrentMission from '../../domain/entities/CurrentMission';

type Props = {
  mission: CurrentMission;
};
export const MissionForHomeItemWidget = ({ mission }: Props) => {
  return (
    <View>
      <Text>{mission.campaignName}</Text>
      <Text>{mission.brandName}</Text>
    </View>
  );
};