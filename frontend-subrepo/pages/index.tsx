/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import Link from 'next/link';

interface Props {
    connectWallet: any,
    connected: boolean,
    address: string,
    errmsg: string,
    role: string
}

const Index: React.FC<Props> = ({ connectWallet, connected, address, errmsg }) => {

    const router = useRouter()

    return (
        <>
            <div className='noti-bar'>
                <p>A project developed in Polkadot Hackathon: APAC Edition 2023</p>
            </div>
            <div className='land-body'>
                <Container maxWidth="lg" >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={9} className='land-text-wrap mb-70'>
                            <span className='land-text'>A better way to receive payouts for Polkadot & Substrate.</span>
                            <Button className='img-icon-btn ml-15 mt-m2r'><img className='emissary-icon' src='assets/img/Raised-Paper.png' alt="" /> Emissary</Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className='lunch-item'>
                                <img className='lunch-icon' src='assets/img/key-icon.png' alt=""/>
                                <p className='lunch-text'>Launch existing emissary</p>
                                <p className='lunch-text-sub'>Already have a emissary for your community? Enter the unique code and direct to your emissary.</p>
                                <div className='code-box mt-30'>
                                    <input className='code' placeholder='Enter code...' />
                                    <div className='action'>
                                        <ArrowCircleRightOutlinedIcon className='pink-text' />
                                    </div>

                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <div className='lunch-item'>
                                <img className='lunch-icon' src='assets/img/plus-icon.png' alt=""/>
                                <p className='lunch-text'>New emissary</p>
                                <p className='lunch-text-sub'>A new emissary that can controlled by one or multiple owners. The perfect solution to process payout to your community.</p>
                                <div className='mt-30'>
                                    <Link href="/emissary_create">
                                        <Button className='white-btn'>Create my emissary</Button>
                                    </Link>
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
