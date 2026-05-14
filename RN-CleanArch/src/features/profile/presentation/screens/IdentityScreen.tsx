import { StyleSheet, View } from 'react-native';
import SecondaryHeader from '../../../../shared/widgets/SecondaryHeader';
import GlobeTextInput from '../../../../shared/widgets/GlobeTextInput';
import { SafeAreaView } from 'react-native-safe-area-context';

const IdentityScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SecondaryHeader title="Identité" />
      <View style={styles.container}>
        <GlobeTextInput
          label="Numéro de sécurité sociale"
          defaultValue=""
          onTextChange={() => {}}
        />
        <GlobeTextInput
          label="Nom"
          defaultValue=""
          isRequired={true}
          onTextChange={() => {}}
        />
        <GlobeTextInput
          label="Prénom"
          defaultValue=""
          isRequired={true}
          onTextChange={() => {}}
        />
        <GlobeTextInput
          label="Ville de naissance"
          defaultValue=""
          isRequired={true}
          onTextChange={() => {}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
export default IdentityScreen;
