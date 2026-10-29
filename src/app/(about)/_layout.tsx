import { Stack, useTheme } from 'expo-router';
import { useSystemScreenStackPreset } from '../../components/StackPreset';


export default function RootLayout() {
  const theme= useTheme();
  return (
    <Stack
      screenOptions={{
        ...useSystemScreenStackPreset,
        headerLargeTitle: false,
        title: 'Hot Chocolate App',
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    />
  );
}
