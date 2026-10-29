import { Stack } from 'expo-router';
import { useSystemScreenStackPreset } from '../../components/StackPreset';

export default function RootLayout() {
  return <Stack screenOptions={useSystemScreenStackPreset()} />;
}
