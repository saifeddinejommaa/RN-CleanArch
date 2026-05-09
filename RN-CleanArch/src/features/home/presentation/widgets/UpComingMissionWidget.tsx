import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { JSX, useEffect } from 'react';
import { getUpComingMissionAction } from '../HomeSlice';
import { RequestState } from '../../../../core/state/RequestState';
import UpComingMission from '../../domain/entities/UpComingMission';
import { GlobeCard } from '../../../../shared/widgets/GlobeCard';
import { typography } from '../../../../theme/typography';
import { MissionForHomeItemWidget } from './MissionForHomeWidget';
import EmptyDataWidget from '../../../../shared/widgets/EmptyDataWidget';

const UpComingMissionWidget = () => {
  const dispatch = useDispatch<any>();
  const homeState = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(getUpComingMissionAction());
  }, dispatch);

  return (
    <View>
      <Text style={typography.label2XLarge}>Mission à venir</Text>
      <View>{buildContent(homeState.upComingMission)}</View>
    </View>
  );
};

function buildContent(upComingMission: RequestState<UpComingMission[]>): JSX.Element {
  if (upComingMission.status === 'loading') {
    return <ActivityIndicator />;
  }

  if (upComingMission.error != null) {
    return <Text>{upComingMission.error}</Text>;
  }

  const missions: UpComingMission[] | null = upComingMission.data;
  if (missions === null) {
    return <EmptyDataWidget message="No missions à venir"></EmptyDataWidget>;
  }

  return (
    <View>
      {missions.map((mission) => (
        <View>
          <Text style={styles.dateText}>
            {new Date(mission.firstMissionDay).toLocaleDateString('fr-FR')}
          </Text>
          <MissionForHomeItemWidget
            campainName={mission.campaignName}
            logo={mission.logo}
            occupationLabel={mission.occupationLabel}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dateText: {
    ...typography.LabelXLarge,
    marginBottom: 10,
  },
});

export default UpComingMissionWidget;
