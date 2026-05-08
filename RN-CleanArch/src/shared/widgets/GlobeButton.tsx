import React from 'react';
import { TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';

type CustomButtonProps = {
  child: React.ReactNode;
  onPress: () => void; // style optionnel du texte
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

export default function GlobeButton({
  child,
  onPress,
  disabled = false,
  style = null,
}: CustomButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, style]}
    >
      {child}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#aaa',
  },
});
