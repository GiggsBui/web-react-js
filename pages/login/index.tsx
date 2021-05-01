import { NextPage } from 'next';
import React, { useEffect } from 'react';
import DefaultLayout from '../../layouts/default';
// import { authService } from '../../services/auth';

const AboutPage: NextPage = () => {
    useEffect(() => {
    }, []);
    return (
        <DefaultLayout>
            <main>
                <h1 className="login-page">Page Login</h1>
            </main>
        </DefaultLayout>
    );
};
export default AboutPage;
