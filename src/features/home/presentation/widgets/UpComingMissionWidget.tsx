import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { JSX } from "react";
import UpComingMission from "../../domain/entities/UpComingMission";
import { typography } from "../../../../theme/typography";
import { MissionForHomeItemWidget } from "./MissionForHomeWidget";
import EmptyDataWidget from "../../../../shared/widgets/EmptyDataWidget";
import { UseUpcomingMission } from "../hooks/UseUpcomingMission";

const UpComingMissionWidget = () => {
  const { isLoading, error, upcomingMission } = UseUpcomingMission();

  const buildContent = (): JSX.Element => {
    if (isLoading) {
      return <ActivityIndicator />;
    }

    if (error != null) {
      return <Text>{error}</Text>;
    }

    const missions: UpComingMission[] | null = upcomingMission;
    if (missions === null) {
      return <EmptyDataWidget message="No missions à venir"></EmptyDataWidget>;
    }

    return (
      <View>
        {missions.map((mission) => (
          <View key={mission.id}>
            <Text style={styles.dateText}>
              {new Date(mission.firstMissionDay).toLocaleDateString("fr-FR")}
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
  };

  return (
    <View>
      <Text style={typography.label2XLarge}>Mission à venir</Text>
      <View>{buildContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  dateText: {
    ...typography.LabelXLarge,
    marginBottom: 10,
  },
});

export default UpComingMissionWidget;
