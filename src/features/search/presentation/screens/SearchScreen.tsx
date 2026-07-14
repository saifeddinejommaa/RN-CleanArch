import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import { GlobePrincipalScreen } from "../../../../shared/widgets/GlobePrincipalScreen";
import Mission from "../../domain/entities/Mission";
import MissionListItem from "../widgets/MissionListItem";
import { useSearch } from "../hooks/useSearch";
import { useCallback } from "react";

const SearchScreen = () => {
  const { error, isLoading, missions } = useSearch();

  const renderItem = useCallback(({ item }: { item: Mission }) => {
    return (
      <MissionListItem
        startDate={item.startDate}
        addressList={item.addressList}
        endDate={item.endDate}
        logo={item.logo}
        missionSubTitle={item.occupationName}
        missionTitle={item.campaignName}
        price={item.price}
      />
    );
  }, []);

  const keyExtractor = useCallback((item: Mission) => item.id.toString(), []);

  const renderView = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    if (error !== undefined) {
      return <Text>Une erreur est survenue : {error}</Text>;
    }

    if (error === undefined && (missions === null || missions.length === 0)) {
      return <Text>Aucune mission trouvée</Text>;
    }

    return (
      <FlatList
        data={missions}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    );
  };

  return (
    <GlobePrincipalScreen
      screenTitle="Recherche"
      child={<View style={styles.container}>{renderView()}</View>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: "center",
  },
  body: {
    flex: 1,
    marginTop: 0,
    width: "100%",
  },
});

export default SearchScreen;
