import dynamic from 'next/dynamic';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import MainLayout from '../shared/components/layout/main-layout/MainLayout.js';
import Constants from '../shared/library/constants.js';
import Guard from '../shared/library/guards/Guard.js';

const HomeContainer = dynamic(() => import('../shared/containers/home/HomeContainer'), {
    ssr: false,
});
function Home (props) {
    return (
        <>
            <Head>
                <title>{Constants.Title}</title>
            </Head>
            <HomeContainer />
        </>
    )
}
Home.Layout = MainLayout;
export default Home;