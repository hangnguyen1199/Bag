import React, { Component ,useState,useEffect} from 'react';
import Head from 'next/head';
import 'antd/dist/antd.css';
import Display from "../../common/display";
import { Drawer, Button } from 'antd';
import Header from '../header/Header';

const MainLayout = (props) => {
    const [visible, setVisible] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const handleCollapse = () => {
        setCollapsed(!collapsed);
        setVisible(true);
    };

    const toggleClick=()=>{
        setCollapsed(!collapsed);
        setVisible(true);
    }
    const handleCloseCollapse=()=>{
        setCollapsed(false);
    }
    const showDrawer = () => {
        setVisible(true);
        setCollapsed(!collapsed);
    };
    const onClose = () => {
        setVisible(false);
        setCollapsed(!collapsed);
    };
    useEffect(() => {

    }, [])
    return (
        <>
            <Head>
                <meta
                    property="og:viewport"
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <Display mobile>
                <Drawer  width={345} placement="left" title={
                    <>
                        <img src='' style={{width:50, objectFit:'contain'}}></img>
                        <img src='' style={{width:150, objectFit:'contain'}}></img>
                    </>
                } 
                onClose={onClose} visible={visible}>
                </Drawer>
            </Display>
            <div id="spo-layout">
                <div
                    className="pageWrapper"
                    id="body"
                >
                    <div id="page-content">
                        <Header>{props.children}</Header>
                    
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainLayout;