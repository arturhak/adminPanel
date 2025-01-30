import React, {useEffect} from 'react';
import './App.scss';
import Header from "./components/Header"
import {useWeb3ModalAccount} from "@web3modal/ethers/react";
import {createWeb3Modal, defaultConfig} from '@web3modal/ethers/react';
import {useWeb3Modal} from '@web3modal/ethers/react';
import AuthLayout from "./auth/AuthLayout";
import {useTranslation} from "react-i18next";

// 1. Get projectId
const projectId = '74370368811ba66914930f4fb4b97b9d'

// 2. Set chains
const mainnet = {
    chainId: 97,
    name: 'BNB Smart Chain Testnet',
    currency: 'tBNB',
    explorerUrl: 'https://bscscan.io',
    rpcUrl: 'https://data-seed-prebsc-1-s2.bnbchain.org:8545'
}

// 3. Create a metadata object
const metadata = {
    name: 'CryptoLottery777',
    description: 'CryptoLottery777',
    url: 'https://cryptolottery777.netlify.app/', // origin must match your domain & subdomain
    icons: ["avatar"]
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
    /*Required*/
    metadata,

    /*Optional*/
    enableEIP6963: true, // true by default
    enableInjected: true, // true by default
    enableCoinbase: true, // true by default
    rpcUrl: '...', // used for the Coinbase SDK
    defaultChainId: 97 // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
createWeb3Modal({
    ethersConfig,
    chains: [mainnet],
    projectId,
    enableAnalytics: true, // Optional - defaults to your Cloud configuration
    themeMode: "dark",
    themeVariables: {
        "--w3m-font-family": 'Noto Sans Regular',
        "--w3m-accent": "#FFF",
        "--w3m-border-radius-master": "16px",
    },
})

function App() {
    const {t} = useTranslation()

    const {address, chainId, isConnected, status} = useWeb3ModalAccount();
    const { open } = useWeb3Modal();

    useEffect(()=> {
        apiReference();
    },[]);

    const mid = "23804";
    const apiKey = "23804CNPLZFIYWTSQEDR";
    const secretKey = "B23D98E7E64056621BACED6C70CA8CE2"

    const apiReference = async () => {
        try {
            const options = {
                method: 'GET',
                headers: {Accept: 'text/html, application/xhtml+xml, application/xml;q=0.9, image/webp'}
            };

            fetch(`https://api.offer18.com/api/m/offers/?mid=${mid}&api-key=${apiKey}&secret-key=${secretKey}`, options)
                .then(res => res.json())
                .then(res => console.log("response=>",res))
                .catch(err => console.error(err));
        } catch (error) {
            console.error("Error tracking conversion:", error);
        }
    };

  return (
    <div className="App">
        <Header
            address={address}
            chainId={chainId}
            isConnected={isConnected}
            open={open}
            status={status}
        />
        <AuthLayout
            t={t}
        />
    </div>
  );
}

export default App;
