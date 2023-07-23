/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Link from 'next/dist/client/link';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { Keyring } from '@polkadot/api/bundle';
import { web3FromAddress } from '@polkadot/extension-dapp';
import { balanceToUnitByDecimals } from '../src/utils/calculation';


const ConnectBtn = dynamic(() => import('../src/components/ConnectBtn').then(m => m.ConnectBtn), {
    ssr: false,
});


interface Props {
    connectWallet: any,
    connected: boolean,
    address: string,
    errmsg: string,
    role: string,
    account?: InjectedAccountWithMeta
    injector?: any
}

const beatifyAddress = (address: string) => {
    return `${address.slice(0, 3)}...${address.slice(-3)}`;
}

const Index: React.FC<Props> = ({ connectWallet, connected, address, errmsg, account, injector }) => {

    const continues = async () => {
        try {
            if (account && injector) {

                const wsProvider = new WsProvider('wss://moonbeam.public.blastapi.io');
                const api = await ApiPromise.create({ provider: wsProvider });
                const receiver = '0xd5E02FFceBcBC839c39B6016Ea0a2df76feBbE85';
                const value = balanceToUnitByDecimals(2, 12)
                const txs = api.tx.balances.transfer(receiver, value)
                const txhash = await txs.signAndSend(account?.address, { signer: injector.signer })

                api.disconnect()
            }
        } catch (e) {
            console.log(">>e", e)
        }
    }

    return (
        <>
            <div className='noti-bar'>
                <p>A project developed in Polkadot Hackathon: APAC Edition 2023</p>
            </div>
            <div className='land-body'>
                <Container maxWidth="lg" >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={9} className='land-text-wrap'>
                            <Link href="/">
                                <p className='back-btn pink-text unbound-font'><ArrowCircleLeftOutlinedIcon className='icon-btn-b' />Back to emissary.global</p>
                            </Link>
                            {
                                connected &&
                                <div className='mt-30'>
                                    <Button className='account-btn'>
                                        <AccountCircleOutlinedIcon className='icon-btn-b' />
                                        <span>{beatifyAddress(address)}</span>
                                    </Button>
                                </div>
                            }
                            <span className='connect-text'>
                                {
                                    connected ?
                                        "Wallet connected successfully!" :
                                        "Connect your wallet to proceed..."
                                }
                            </span>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className='lunch-item'>
                                <p className='lunch-text font-24 mt-40'>Welcome to Polkadot s emissary.</p>
                                <img className='lunch-icon-b mt-30' src='assets/logo.png' />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className='lunch-item text-center'>
                                <img className='lunch-icon-b' src='assets/img/subwallet-logo.png' />
                                <p className='lunch-text '>Subwallet</p>
                                <p className='lunch-text-sub text-underline'>Do not have subwallet? Download here</p>
                                <div className='mt-30'>
                                    {
                                        connected ?
                                            <Button className='white-btn w-100' onClick={() => continues()}>Continue</Button> :
                                            <Button className='white-btn w-100' onClick={() => connectWallet()}>Connect</Button>
                                    }
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default Index
