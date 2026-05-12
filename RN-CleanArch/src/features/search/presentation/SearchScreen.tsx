import { useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import { GlobePrincipalScreen } from '../../../shared/widgets/GlobePrincipalScreen';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../app/store';
import { getAllMissions } from './SearchSlice';
import Mission from '../domain/entities/Mission';
import { RequestState } from '../../../core/state/RequestState';

const SearchScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchState = useSelector((state: RootState) => state.search);
  useEffect(() => {
    dispatch(getAllMissions());
  }, []);

  return (
    <GlobePrincipalScreen
      screenTitle="Recherche"
      child={<View style={styles.container}>{renderView(searchState.missions)}</View>}
    />
  );
};

function renderView(result: RequestState<Mission[] | null>) {
  if (result.status === 'loading') {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  if (result.status === 'error') {
    return <Text>Une erreur est survenue : {result.error}</Text>;
  }
  
  if (result.status === 'success' && (result.data == null || result.data.length === 0)) {
    return <Text>Aucune mission trouvée</Text>;
  }
  return (
    <FlatList
      data={result.data ?? []}
      renderItem={({ item }) => <Text>{item.missionTitle}</Text>}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    marginTop: 0,
    width: '100%',
  },
});

export default SearchScreen;
