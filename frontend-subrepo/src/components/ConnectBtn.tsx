import React, { useState, useEffect } from 'react';
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';
import { InjectedAccountWithMeta, Injected } from '@polkadot/extension-inject/types';
 

type TExtensionState = {
    data?: {
        accounts: InjectedAccountWithMeta[],
        defaultAccount: InjectedAccountWithMeta,
    }
    loading: boolean
    error: null | Error
}

const initialExtensionState: TExtensionState = {
    data: undefined,
    loading: false,
    error: null
};

interface Props {
    connect: boolean,
    result: (account: InjectedAccountWithMeta[], defaultAccount: InjectedAccountWithMeta, injector: any) => void
    errorMsg: (msg: string) => void
}

 

export const ConnectBtn: React.FC<Props> = ({ connect, result, errorMsg }) => {
    const [state, setState] = useState(initialExtensionState);

    useEffect(() => {
        if (connect) {
            handleConnect();
        }
    }, [connect])

    const handleConnect = () => {
        setState({ ...initialExtensionState, loading: true });

        web3Enable('polkadot-extension-dapp')
            .then(async (injectedExtensions) => {
                if (!injectedExtensions.length) {
                    return Promise.reject(new Error('NO_INJECTED_EXTENSIONS'));
                }
                errorMsg('no_extension') 
                const injectedAccounts = await web3Accounts();

                return web3Accounts();
            })
            .then(async (accounts) => {
                if (!accounts.length) {
                    return Promise.reject(new Error('NO_ACCOUNTS'));
                }
                setState({
                    error: null,
                    loading: false,
                    data: {
                        accounts: accounts,
                        defaultAccount: accounts[0],
                    }
                });
                const injector = await web3FromAddress(accounts[0].address)
                console.log(">>>>GG", injector)
                result(accounts, accounts[0], injector)
            })
            .catch((error) => {
                console.error('Error with connect', error);
                errorMsg('connect_err')
                setState({ error, loading: false, data: undefined });
            });
    };

    if (state.error) {
        errorMsg('connect_err')
        return <></>
    }
    return <></>

};

