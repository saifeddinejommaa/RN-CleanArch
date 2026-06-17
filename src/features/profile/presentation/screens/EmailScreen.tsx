import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GlobeTextInput from '../../../../shared/widgets/GlobeTextInput';
import SecondaryHeader from '../../../../shared/widgets/SecondaryHeader';

const EmailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <SecondaryHeader title='Email'></SecondaryHeader>
      <GlobeTextInput
        label="E-mail actuel"
        isEnabled={false}
        defaultValue=""
        onTextChange={() => {}}
      />
      <GlobeTextInput
        label="Nouveau e-mail"
        defaultValue=""
        isRequired={true}
        onTextChange={() => {}}
      />
      <GlobeTextInput
        label="Confirmer le nouveau e-mail"
        defaultValue=""
        isRequired={true}
        onTextChange={() => {}}
      />
    </SafeAreaView>
  );
};

export default EmailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});
