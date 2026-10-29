import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { Stack, useTheme } from 'expo-router';

type StackScreenOptions = React.ComponentProps<typeof Stack>['screenOptions'];
const hasLiquidGlass = isLiquidGlassAvailable();

/**
 * A preset for the Stack screen options that uses the system's appearance settings.
 */

export function useSystemScreenStackPreset(): StackScreenOptions {
  const theme = useTheme()
  return {
    headerTransparent: hasLiquidGlass,
    headerBlurEffect: hasLiquidGlass ? undefined : 'systemMaterial',
    headerLargeTitleShadowVisible: false,
    contentStyle: { backgroundColor: theme.colors.background }
  }
};
