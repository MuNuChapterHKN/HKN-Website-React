import { FormatIcu } from '@tolgee/format-icu';
import { Tolgee, DevTools } from '@tolgee/react';

export const tolgee = Tolgee()
  .use(FormatIcu())
  .use(DevTools())
  .init({
    availableLanguages: ['en', 'it'],
    defaultLanguage: 'en',
    apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
    apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
    staticData: {
        en: () => import('../../messages/en.json'),
        it: () => import('../../messages/it.json'),
        'en:namespaced': () => import('../../messages/en.json'),
        'it:namespaced': () => import('../../messages/it.json'),
    },
  });
