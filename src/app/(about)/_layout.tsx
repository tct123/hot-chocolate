import { Stack, useTheme } from 'expo-router';
import { systemGroupedBackground, SystemScreenStackPreset } from '../../components/StackPreset';


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
