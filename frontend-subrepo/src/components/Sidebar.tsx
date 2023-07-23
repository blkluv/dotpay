
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

const tabs = [
    { id: 0, name: "Transfer Requests", route: '/request', role: ['Client', 'Controller'] },
    { id: 1, name: "Safes", route: '/safe', role: ['Client', 'Controller'] },
    { id: 2, name: "Programs", route: '/programs', role: ['Controller'] },
    { id: 3, name: "NFT Collections", route: '/nft_redemption', role: ['Client', 'Controller'] },
    { id: 4, name: "Emissary Settings", route: '/emissary_set', role: ['Controller'] },
]

interface Props {
    selectTab: any,
    connectWallet: any,
    connected: boolean,
    address: string,
    errmsg: string,
    role: string,
    account?: InjectedAccountWithMeta
}

const beatifyAddress = (address: string) => {
    return `${address.slice(0, 3)}...${address.slice(-3)}`;
}

const SideBar: React.FC<Props> = ({ selectTab, connectWallet, connected, address, errmsg, role }) => {

    const router = useRouter()
    const [currnetTab, setCurrnetTab] = useState(10)

    useEffect(() => {
        const tab_idx = Number(localStorage.getItem('tab'))
        setCurrnetTab(tab_idx);
    }, [])

    const changeTab = (index: number) => {
        setCurrnetTab(index);
        selectTab(index);
        localStorage.setItem('tab', index.toString())
        const r = tabs[index].route;
        router.push(r);
    }

    return (
        <div className='side-bar-wrap'>
            <div>
                <Link href="/">
                    <img className='logo-side' src='/assets/logo.png' alt="" />
                </Link>
                {
                    tabs.map((tab, index) => {
                        return (
                            tab.role.includes(role) &&
                            <Button key={index} variant="outlined" className={currnetTab == tab.id ? "side-btn-active" : "side-btn"} onClick={() => changeTab(index)} >{tab.name}</Button>
                        )
                    })
                }
            </div>
            <div>
                {
                    connected &&
                    <div className='mt-30 mb-30'>
                        <Button className='account-btn-white'>
                            <AccountCircleOutlinedIcon className='icon-btn-b ' />
                            <span className='mr-10'>{beatifyAddress(address)}</span>
                            <span className='pink-wrap'>{role}</span>
                        </Button>
                    </div>
                }
            </div>
        </div>
    );
}
export default SideBar;
