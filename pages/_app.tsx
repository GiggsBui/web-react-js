import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import React from 'react';
import '../assets/scss/index.scss';
import store from '../store/store';

const MyApp = ({ Component, pageProps }: any) => (
    <>
        <link rel="icon" href="/favicon.ico" />
        <Head>
        </Head>
        <Component {...pageProps} />
    </>
);

const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
