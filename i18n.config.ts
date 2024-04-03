import { englishTranslations } from '~/translations/en';
import { germanTranslations } from '~/translations/de';
import type { I18nOptions } from 'vue-i18n';

export default defineI18nConfig(() =>  {
    return {
        legacy: false,
        messages: {
            en: { ...englishTranslations },
            de: { ...germanTranslations }
        }
    } as I18nOptions
})
