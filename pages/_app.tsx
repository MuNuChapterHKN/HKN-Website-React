import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import '../styles/fonts.css'
import Head from "next/head";
import { createContext, useEffect, useState } from 'react';
import { FeatureFlag, fetchFeatureFlags } from './api/directus';

export type FeatureFlagsCollection = Record<string, boolean>;

const DEFAULT_FEATURE_FLAGS = {
    "is_recruitment_open": false,
    "show_teams": true,
    "show_teams_popups": true
}

export enum Feature {
    ShowTeams = "show_teams",
    ShowTeamsPopups = "show_teams_popups",
    IsRecruitmentOpen = "is_recruitment_open"
}

const parseFeatureFlags =
    (featureFlags: FeatureFlag[]) => Object.fromEntries(featureFlags.map((ff) => [ff.name, ff.status]))

export const FeatureFlagsContext = createContext<FeatureFlagsCollection>(DEFAULT_FEATURE_FLAGS);

export default function App({ Component, pageProps }: AppProps) {
    const [featureFlags, setFeatureFlags] = useState<FeatureFlagsCollection>(DEFAULT_FEATURE_FLAGS);

    useEffect(() => {
        (async () => {
            const featureFlags = await fetchFeatureFlags();
            setFeatureFlags(parseFeatureFlags(featureFlags));
        })();
    }, [])

    return (<>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico" />
        </Head>
        <FeatureFlagsContext.Provider value={featureFlags}>
            <Component {...pageProps} />
        </FeatureFlagsContext.Provider>
        <Analytics />
    </>);
}
