import { NextPage } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';
import SiteLayout from '../../components/SiteLayout';
import BlankLayout from '../../layouts/blank';

const AboutPage: NextPage = () => {
    const counter = useSelector((state: any) => state.counter.value);
    return (
        <BlankLayout>
            <SiteLayout>
                <main>
                    <h1 className="title">Page About</h1>
                    <h1 className="title">{counter}</h1>
                </main>
            </SiteLayout>
        </BlankLayout>
    );
};
export default AboutPage;
