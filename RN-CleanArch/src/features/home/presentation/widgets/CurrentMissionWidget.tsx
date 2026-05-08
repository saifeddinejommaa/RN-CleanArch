import { JSX, useEffect } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { typography } from '../../../../theme/typography';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store';
import { GlobeCard } from '../../../../shared/widgets/GlobeCard';
import { MissionForHomeItemWidget } from './MissionForHomeWidget';
import { getCurrentMissionAction } from '../HomeSlice';
import CurrentMission from '../../domain/entities/CurrentMission';

export const CurrentMissionWidget = () => {
  const dispatch = useDispatch<any>();
  const homeState = useSelector((state: RootState) => state.home);
  useEffect(() => {
    dispatch(getCurrentMissionAction());
  }, [dispatch]);

  return (
    <View>
       <Text style={typography.subTitle}>Mission en Cours</Text>
    <GlobeCard
      child={
        <View style={styles.currentMission}>
          {buildContent(homeState.currentMission.data)}
        </View>
      }
    ></GlobeCard>
    </View>
  );
};

function buildContent(currentMission: CurrentMission | null): JSX.Element {
  if (currentMission == null) {
    return <View style ={styles.noMissionContent}>
      <Text>Aucune mission pour le moment</Text>
    </View>;
  }

  return <MissionForHomeItemWidget campainName={currentMission.campaignName} logo={currentMission.logo} occupationLabel={currentMission.brandName} />;
}

const styles = StyleSheet.create ({
  currentMission: {
    flex: 1,
  },

  noMissionContent: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop :10,
    marginBottom:10  
  }
});
