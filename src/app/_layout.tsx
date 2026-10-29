import { isLiquidGlassAvailable } from 'expo-glass-effect';
import { NavigationBar } from "expo-navigation-bar";
import { DarkTheme, DefaultTheme, ThemeProvider, useTheme } from 'expo-router';
import { NativeTabs } from 'expo-router/native-tabs';
import 'expo-sqlite/localStorage/install';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import '../../styles/tabs.css';
import { i18n } from '../components/localization';
import { FavouritesProvider } from '../context/FavouritesContext';
const hasLiquidGlass = isLiquidGlassAvailable();

export default function RootLayout() {
  const theme = useTheme()
  const colorScheme = useColorScheme();
  const flavours_navbar = i18n.t("flavours_navbar")
  const location_navbar = i18n.t("locations_navbar")
  const about_navbar = i18n.t("about_navbar")

  return (
    <FavouritesProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <NativeTabs
          blurEffect='systemDefault'
        >
          <NativeTabs.Trigger name="(flavours)">
            <NativeTabs.Trigger.Icon sf="cup.and.saucer" md="local_cafe" />
            <NativeTabs.Trigger.Label>{flavours_navbar}</NativeTabs.Trigger.Label>
          </NativeTabs.Trigger>
          <NativeTabs.Trigger name="(locations)">
            <NativeTabs.Trigger.Icon sf="mappin.and.ellipse" md="location_on" />
            <NativeTabs.Trigger.Label>{location_navbar}</NativeTabs.Trigger.Label>
          </NativeTabs.Trigger>
          <NativeTabs.Trigger name="(about)">
            <NativeTabs.Trigger.Icon sf="info.circle" md="info" />
            <NativeTabs.Trigger.Label>{about_navbar}</NativeTabs.Trigger.Label>
          </NativeTabs.Trigger>
        </NativeTabs>
        <StatusBar style="auto" />
      </ThemeProvider>
      <NavigationBar style='dark' />
    </FavouritesProvider>
  );
}
