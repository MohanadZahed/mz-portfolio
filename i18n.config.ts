import { englishTranslations } from '~/translations/en';
import { germanTranslations } from '~/translations/de';
import type { I18nOptions } from 'vue-i18n';

export default defineI18nConfig(() =>  {
    // TODO: REMOVE
    // eslint-disable-next-line no-console
    console.log('useBrowserLocale(): ', useBrowserLocale());
    return {
        legacy: false,
        locale: useBrowserLocale(),
        messages: {
            en: { ...englishTranslations },
            de: { ...germanTranslations }
        }
    } as I18nOptions
})
