import { systemGroupedBackground } from '@bacons/apple-colors';
import { Stack, useTheme } from 'expo-router';
import { SystemScreenStackPreset } from '../../components/StackPreset';


export default function RootLayout() {
  const theme= useTheme();
  return (
    <Stack
      screenOptions={{
        ...SystemScreenStackPreset,
        headerLargeTitle: false,
        title: 'Hot Chocolate App',
        headerStyle: {
          backgroundColor: systemGroupedBackground,
        },
      }}
    />
  );
}
