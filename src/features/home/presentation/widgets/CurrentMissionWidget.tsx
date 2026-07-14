import { JSX } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { typography } from "../../../../theme/typography";
import { GlobeCard } from "../../../../shared/widgets/GlobeCard";
import { MissionForHomeItemWidget } from "./MissionForHomeWidget";
import EmptyDataWidget from "../../../../shared/widgets/EmptyDataWidget";
import { UseCurrentMission } from "../hooks/UseCurrentMission";

export const CurrentMissionWidget = () => {
  const { isLoading, error, currentMission } = UseCurrentMission();

  const buildContent = (
  ): JSX.Element => {
    if (isLoading) {
      return <ActivityIndicator />;
    }

    if (error != null) {
      return <Text>{error}</Text>;
    }

    if (currentMission == null) {
      return (
        <GlobeCard
          child={<EmptyDataWidget message="Aucune mission pour le moment" />}
        />
      );
    }

    return (
      <MissionForHomeItemWidget
        campainName={currentMission.campaignName}
        logo={currentMission.logo}
        occupationLabel={currentMission.brandName}
      />
    );
  };
  return (
    <View>
      <Text style={typography.label2XLarge}>Mission en Cours</Text>
      <View style={styles.currentMission}>{buildContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  currentMission: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },

  noMissionContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});
