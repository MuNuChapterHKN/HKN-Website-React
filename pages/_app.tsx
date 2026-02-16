import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import '../styles/fonts.css';
import Head from 'next/head';
import { createContext } from 'react'; // Rimuovi useState e useEffect
import { FeatureFlag, fetchFeatureFlags } from './api/directus';

import type { AppContext, AppInitialProps } from 'next/app';
import { useRouter } from 'next/router';
import { TolgeeProvider, TolgeeStaticDataProp } from '@tolgee/react';
import { tolgee } from './api/tolgee';
import App from 'next/app';

export type FeatureFlagsCollection = Record<string, boolean>;

// Aggiorniamo il tipo delle props che riceviamo da getInitialProps
type AppOwnProps = {
  staticData: TolgeeStaticDataProp;
  initialFeatureFlags: FeatureFlagsCollection; // Aggiungiamo i flags
};

const DEFAULT_FEATURE_FLAGS: FeatureFlagsCollection = {
  is_recruitment_open: false,
  show_teams: true,
  show_teams_popups: true,
  // Assicurati che i default includano TUTTE le chiavi
  show_teams_resp_pic: false,
  show_image_after_apply: false,
};

export enum Feature {
  ShowTeams = 'show_teams',
  ShowTeamsPopups = 'show_teams_popups',
  ShowTeamsRespPics = 'show_teams_resp_pic',
  IsRecruitmentOpen = 'is_recruitment_open',
  ShowImageAfterApply = 'show_image_after_apply',
}

const parseFeatureFlags = (
  featureFlags: FeatureFlag[]
): FeatureFlagsCollection => {
  if (!featureFlags || featureFlags.length === 0) {
    return DEFAULT_FEATURE_FLAGS;
  }
  const fetchedFlags = Object.fromEntries(
    featureFlags.map((ff) => [ff.name, ff.status])
  );
  // Uniamo i default con i flag caricati per sicurezza
  return {
    ...DEFAULT_FEATURE_FLAGS,
    ...fetchedFlags,
  };
};

export const FeatureFlagsContext =
  createContext<FeatureFlagsCollection>(DEFAULT_FEATURE_FLAGS);

// Rimuoviamo useState e useEffect, riceviamo 'initialFeatureFlags' come prop
export default function MyApp({
  Component,
  pageProps,
  staticData,
  initialFeatureFlags, // <-- Prop da getInitialProps
}: AppProps & AppOwnProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
      </Head>

      {}
      <FeatureFlagsContext.Provider value={initialFeatureFlags}>
        <TolgeeProvider
          tolgee={tolgee}
          ssr={{ language: router.locale, staticData }}
        >
          {}
          <Component {...pageProps} />
        </TolgeeProvider>
      </FeatureFlagsContext.Provider>

      <Analytics />
    </>
  );
}

// Carichiamo TUTTI i dati server-side qui
MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const locale = context.ctx.locale || 'en'; // Assicurati ci sia un locale

  // Eseguiamo tutte le chiamate dati in parallelo per massima efficienza
  const [ctx, tolgeeStaticData, featureFlagsResponse] = await Promise.all([
    App.getInitialProps(context),
    tolgee.loadRequired({
      language: locale,
    }),
    // Eseguiamo il fetch in modo sicuro, con un fallback
    fetchFeatureFlags().catch((e) => {
      console.error('Failed to fetch feature flags in getInitialProps:', e);
      return []; // Ritorna un array vuoto in caso di errore
    }),
  ]);

  // Eseguiamo il parsing dei flags dopo averli ricevuti
  const initialFeatureFlags = parseFeatureFlags(featureFlagsResponse);

  return {
    ...ctx,
    staticData: tolgeeStaticData,
    initialFeatureFlags: initialFeatureFlags, // Passiamo i flags alle props
  };
};

