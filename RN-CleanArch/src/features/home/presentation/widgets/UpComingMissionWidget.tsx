import { View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { JSX, useEffect } from 'react';
import { getUpComingMissionAction } from '../HomeSlice';
import { RequestState } from '../../../../core/state/RequestState';
import UpComingMission from '../../domain/entities/UpComingMission';
import { GlobeCard } from '../../../../shared/widgets/GlobeCard';
import { typography } from '../../../../theme/typography';
import { MissionForHomeItemWidget } from './MissionForHomeWidget';

const UpComingMissionWidget = () => {
  const dispatch = useDispatch<any>();
  const homeState = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(getUpComingMissionAction());
  }, dispatch);

  return (
    <View>
      <Text style={typography.subTitle}>Mission à venir</Text>
      <GlobeCard
        child={
          <View>{buildContent(homeState.upComingMission)}</View>
        }
      />
    </View>
  );
};

function buildContent(upComingMission: RequestState<UpComingMission[]>): JSX.Element {
  if (upComingMission.error != null) {
    return <Text>{upComingMission.error}</Text>;
  }

  const missions: UpComingMission[] | null = upComingMission.data;
  if (missions === null) {
    return (
      <View>
        <Text>No missions à venir</Text>
      </View>
    );
  }

  return (
    <View>
      {missions.map((mission) => (
        <MissionForHomeItemWidget
          campainName={mission.campaignName}
          logo={mission.logo}
          occupationLabel={mission.occupationLabel}
        ></MissionForHomeItemWidget>
      ))}
    </View>
  );
}

export default UpComingMissionWidget;
