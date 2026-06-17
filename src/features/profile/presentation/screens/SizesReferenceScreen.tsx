
import { SafeAreaView } from "react-native-safe-area-context";
import SecondaryHeader from "../../../../shared/widgets/SecondaryHeader";
import GlobeTextInput from "../../../../shared/widgets/GlobeTextInput";
import { StyleSheet } from "react-native";

const SizesReferenceScreen = () => {
    return (
        <SafeAreaView style={Styles.container}>
            <SecondaryHeader title="Références des tailles" />
            <GlobeTextInput label="Taille (en cm)"/>
            <GlobeTextInput label="Pointure (EU)"/>
        </SafeAreaView>
    );
    }

    export default SizesReferenceScreen;

    const Styles = StyleSheet.create({
        container: {
            flex: 1,
            margin: 10,
        },
    });