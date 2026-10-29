import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";
import de from "./translations/de.json";
import en from "./translations/en.json";

export const deviceLanguage = String(getLocales()?.[0]?.languageCode);

export const i18n = new I18n({
    en,
    de,
});

i18n.enableFallback = true;
i18n.defaultLocale = "en";
i18n.locale = deviceLanguage;
