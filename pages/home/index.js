import React from 'react'
import Head from 'next/head'
import MainLayout from '../../shared/components/layout/main-layout/MainLayout'
import Constants from '../../shared/library/constants'
import HomeContainer from '../../shared/containers/home/HomeContainer'

const HomePage = (props)=> {
    return (
        <>
            <Head>
                <title>{`${Constants.Title}`}</title>
            </Head>
            <HomeContainer></HomeContainer>
            <div>aaaaaaaaaaaaaaaa</div>
        </>
    )
}
HomePage.Layout = MainLayout
export default HomePage