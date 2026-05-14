import { StyleSheet } from 'react-native';
import { fonts } from './fonts';

export const typography = StyleSheet.create({
  label2XLarge: {
    fontSize: 26,
    fontWeight: '700',
    fontFamily: fonts.bold,
  },
  LabelXLarge: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    marginTop:10
  },
  LabelLarge: {
    fontSize: 16,
    fontWeight: '400',
  },
  LabelMedium: {
    fontSize: 12,
    fontWeight: '300',
  },

  LabelSmall: {
    fontSize: 12,
    fontWeight: '300',
  },
  LabelXSmall: {
    fontSize: 10,
    fontWeight: '300',
  },
  Label2XSmall: {
    fontSize: 8,
    fontWeight: '300',
  },
});