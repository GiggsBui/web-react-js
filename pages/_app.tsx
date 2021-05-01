import Head from 'next/head';
import React from 'react';
import '../assets/scss/index.scss';
import withRedux from 'next-redux-wrapper';
import store from '../store/store';
import { AppProvider } from '@shopify/polaris';
import translations from '@shopify/polaris/locales/en.json';
import '@shopify/polaris/dist/styles.css';

const MyApp = ({ Component, pageProps }: any) => (
    <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <AppProvider i18n={translations}>
            <Component {...pageProps} />
        </AppProvider>
    </>
);

const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
