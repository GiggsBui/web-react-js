import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SiteLayout from '../components/SiteLayout';
import BlankLayout from '../layouts/blank';
import { incrementCounter } from '../store/actions/counterActions';

interface Props {
  user: {
    name: string;
    phone: string;
    email: string;
    address: string;
  }
}

const IndexPage: NextPage<Props> = ({ user }: any) => {
    const router = useRouter();
    useEffect(() => {
        router.push('/login');
    });
    const counter = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <BlankLayout>
            <SiteLayout>
                <main>
                    <h1>Wellcome {user.name} join to Your Flower App</h1>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>Address: {user.address}</p>
                    <p>counter: {counter}</p>
                    <button
                        onClick={() => {
                            dispatch(incrementCounter());
                        }}
                    >
                Click me
                    </button>
                    <button onClick={() => router.push('/login')}>Login</button>
                </main>
            cdsza
            </SiteLayout>
        </BlankLayout>
    );
};

export default IndexPage;

/*
 * More information about getServerSideProps:
 * https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
 */
export const getServerSideProps: GetServerSideProps<Props> = async () => {
    return {
        props: {
            user: {
                name: 'Giggs',
                email: 'giggs@namtech.sg',
                phone: '84973637103',
                address: '165/16c Văn Thân, P8, Q6, TPHCM',
            },
        },
    };
};
