import { Ionicons } from '@expo/vector-icons';

declare type BottomBarIconParam = {
  focused: Boolean;
  name: keyof typeof Ionicons.glyphMap;
};
export const BottomBarIcon = (props: BottomBarIconParam) => {
  return (
    <Ionicons name={props.name} size={32} color={props.focused ? 'tomato' : 'gray'} />
  );
};
