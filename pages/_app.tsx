import withRedux from 'next-redux-wrapper';
import Head from 'next/head';
import '../assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import store from '../store/store';

const MyApp = ({ Component, pageProps }: any) => (
    <>
        <Head>
            <link rel="icon" href="/images/logo.png" />
        </Head>
        <Component {...pageProps} />
    </>
);

const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
