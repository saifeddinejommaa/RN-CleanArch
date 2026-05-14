import { StyleSheet, View, Image, Text, ImageComponent, Pressable, TouchableOpacity } from 'react-native';
import MissionAddress from '../../domain/entities/MissionAddress';
import { GlobeCard } from '../../../../shared/widgets/GlobeCard';
import Separator from '../../../../shared/widgets/Separator';
import { typography } from '../../../../theme/typography';
import DatesWidget from './DatesWidget';
import MissionAddressWidget from './MissionAddressWidget';

type MissionListItemProps = {
  logo: string;
  missionTitle: string;
  missionSubTitle: string;
  startDate: Date;
  endDate: Date;
  price :string;
  addressList: MissionAddress[];
  onPress?: () => void;
};

const MissionListItem = (mission: MissionListItemProps) => {
  return (
    <TouchableOpacity style={styles.touchable} activeOpacity={0.7} onPress={() => mission.onPress}>
    <GlobeCard 
      child={
        <View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: mission.logo }} />
          </View>
          <Separator />
          <Text style={typography.LabelXLarge}>{mission.missionTitle}</Text>
          <Text style={typography.LabelLarge}>{mission.missionSubTitle}</Text>
          <DatesWidget startDate={mission.startDate} endDate={mission.endDate} />
          <Separator />
          <MissionAddressWidget
            missionAddress={mission.addressList}
          ></MissionAddressWidget>
          <View style={styles.priceContainer} >
            <Text style={typography.LabelLarge}>{mission.price}</Text>
          </View>
        </View>
      }
    />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    touchable: {    
        borderRadius: 4,
        backgroundColor: '#FFFFFF',
    },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 80,
    borderRadius: 8,
  },
  container: {
    margin: 10,
  },
  priceContainer : {
    padding: 10,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});

export default MissionListItem;
