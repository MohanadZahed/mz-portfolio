import { englishTranslations } from '~/translations/en';
import { germanTranslations } from '~/translations/de';


export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
        en: { ...englishTranslations },
        de: { ...germanTranslations }
    }
}))
