import { useState } from 'react';
import { StyleSheet, TextInput, View , Text} from 'react-native';
import { container } from '../../core/di/container';

type GlobeTextInputProps = {
  defaultValue?: string;
  label: string;
  isRequired?: boolean;
  onTextChange?: (text: string) => void;
  onFocus?: () => void;
  isEnabled?: boolean;
};

const GlobeTextInput = (props: GlobeTextInputProps) => {
  const [value, setValue] = useState(props.defaultValue || '');
  return (
    <View style= {styles.container}>
      <Text>{props.label + (props.isRequired ? ' *' : '')}</Text>
    <TextInput
      style={styles.input}
      editable={props.isEnabled}
      onFocus={props.onFocus}
      value={value}
      onChange={(text) => {
        setValue(text.nativeEvent.text);
        if (props.onTextChange) {
          props.onTextChange(text.nativeEvent.text);
        }
      }}
    ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#00529C',
    paddingVertical: 8,
  }
});

export default GlobeTextInput;
