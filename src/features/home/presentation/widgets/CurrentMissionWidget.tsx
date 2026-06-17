import { JSX, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { typography } from '../../../../theme/typography';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { GlobeCard } from '../../../../shared/widgets/GlobeCard';
import { MissionForHomeItemWidget } from './MissionForHomeWidget';
import { getCurrentMissionAction } from '../HomeSlice';
import CurrentMission from '../../domain/entities/CurrentMission';
import EmptyDataWidget from '../../../../shared/widgets/EmptyDataWidget';
import { RequestState } from '../../../../core/state/RequestState';

export const CurrentMissionWidget = () => {
  const dispatch = useDispatch<any>();
  const homeState = useSelector((state: RootState) => state.home);
  useEffect(() => {
    dispatch(getCurrentMissionAction());
  }, [dispatch]);

  return (
    <View>
      <Text style={typography.label2XLarge}>Mission en Cours</Text>

      <View style={styles.currentMission}>{buildContent(homeState.currentMission)}</View>
    </View>
  );
};

function buildContent(requestState: RequestState<CurrentMission>): JSX.Element {
  if (requestState.status === 'loading') {
    return <ActivityIndicator />;
  }

  if (requestState.error != null) {
    return <Text>{requestState.error}</Text>;
  }

  const currentMision = requestState.data;
  if (currentMision == null) {
    return (
      <GlobeCard child={<EmptyDataWidget message="Aucune mission pour le moment" />} />
    );
  }

  return (
    <MissionForHomeItemWidget
      campainName={currentMision.campaignName}
      logo={currentMision.logo}
      occupationLabel={currentMision.brandName}
    />
  );
}

const styles = StyleSheet.create({
  currentMission: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },

  noMissionContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});
