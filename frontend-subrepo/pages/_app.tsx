import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useState, useEffect } from 'react';
import SideBar from '../src/components/Sidebar';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic';
import { apiHost } from '../src/utils/constant';
import axios from 'axios';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
const ConnectBtn = dynamic(() => import('../src/components/ConnectBtn').then(m => m.ConnectBtn), {
    ssr: false,
});

const Main = styled('main', {})<{}>(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: '#F9F9F9',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
}));

const emissary = '64b683c15101ce3f213c1de4';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()

    const [trig, setTrig] = useState(false)
    const [connected, setConnected] = useState(false)
    const [address, setAddress] = useState("")
    const [errmsg, setErrmsg] = useState("")
    const [side, setSide] = React.useState(false)
    const [role, setRole] = useState('Client')
    const [account, setAccount] = useState<InjectedAccountWithMeta>()
    const [injector, setInjector] = useState()

    useEffect(() => {
        const c = localStorage.getItem('connected')
        if (c == 'true') {
            connect();
        }
    })

    const connect = async () => {
        setTrig(true)
    }
    const result = (accounts: any, defaultAccount: InjectedAccountWithMeta, injector: any) => {
        setInjector(injector)
        setAccount(defaultAccount)
        setAddress(defaultAccount.address)
        setConnected(true)
        localStorage.setItem('connected', 'true')
        getEmissary(emissary, defaultAccount.address)
    }
    const errorMsg = (e: string) => {
        setErrmsg(e)
    }
    const openSide = () => {
        setSide(!side)
    }
    const selectTab = (tab: number) => {
        console.log(">>>idx", tab)
    }

    const getEmissary = async (emissary: string, address: string) => {
        try {
            const res = await axios.get(apiHost + 'emissary/one/' + emissary)
            const controller = res.data.controllers;
            var role = 'Client';
            controller.map((c: any) => {
                if (c['address'] == address) {
                    role = 'Controller'
                }
            })
            setRole(role)
        } catch (e) {

        }
    }

    return (
        <Main className='main-body'>
            <ConnectBtn errorMsg={(e) => errorMsg(e)} connect={trig} result={(a, b, c) => result(a, b, c)} />
            {
                router.pathname == "/" || router.pathname == "/connect_wallet" || router.pathname == "/emissary_create" ?
                    <Grid container spacing={0} >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='body-wrap' >
                            <Component
                                injector={injector}
                                account={account}
                                side={side}
                                connected={connected}
                                address={address}
                                errmsg={errmsg}
                                role={role}
                                {...pageProps}
                                connectWallet={(m: any) => connect()}
                            />
                        </Grid>
                    </Grid> :
                    <Grid container spacing={0} >
                        <Grid item xs={12} sm={4} md={4} lg={3} xl={2} className='side-bar'>
                            <SideBar
                                account={account}
                                selectTab={(i: number) => selectTab(i)}
                                connected={connected}
                                address={address}
                                errmsg={errmsg}
                                role={role}
                                connectWallet={(m: any) => connect()}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} md={8} lg={9} xl={10} className='body-wrap' >
                            <Component
                                injector={injector}
                                account={account}
                                side={side}
                                connected={connected}
                                address={address}
                                errmsg={errmsg}
                                role={role}
                                {...pageProps}
                                connectWallet={(m: any) => connect()}
                            />
                        </Grid>
                    </Grid>
            }
        </Main>
    );
}
