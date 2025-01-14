import React, {useState} from "react";
import ConnectionIcon from "../assets/connection-icon.svg";
import i18n from "../translation/i18n";
import {Select} from "antd";
import logo from "../assets/logo.svg";
import RuFlag from "../assets/ru-flag.svg";
import UsFlag from "../assets/us-flag.svg";
import SpFlag from "../assets/spanish-flag.svg";

const allLanguages = [
    {
        value: 'RUS',
        label: <div className="flag-content"><img src={RuFlag} width="22" alt="icon"/><span>RUS</span></div>
    },
    {
        value: 'ENG',
        label: <div className="flag-content"><img src={UsFlag} width="22" alt="icon"/><span>ENG</span></div>
    },
    {
        value: 'ESP',
        label: <div className="flag-content"><img src={SpFlag} width="22" alt="icon"/><span>ESP</span></div>
    },
];

function Header({address, chainId, isConnected, open, status}:any) {
    const [language, setLanguage] = useState<any>(allLanguages.filter(lang => lang.value === "RUS"));
    const [languageOptions, setLanguageOptions] = useState(allLanguages.filter(lang => lang.value !== "RUS"));

    console.log("iSConnected",isConnected)
    console.log("walletAddress",address)
    console.log("chainId",chainId)

    const handleChangeLanguage = (value: string) => {
        const newLangOptions = allLanguages.filter(lang => lang.value !== value);
        setLanguageOptions(newLangOptions)
        setLanguage(value)
        i18n.changeLanguage(value)
    };

    const handleConnect = async () => {
        if (!isConnected) {
            await open();
        }
    }

    const handleDisconnect = () => {
        if (isConnected) {
            open()
        }
    }

    return (
        <div className="header">
            <img src={logo} alt="logo" width={112} height={64}/>
            <div className="header_right">
                <Select
                    defaultValue={language}
                    onChange={handleChangeLanguage}
                    options={languageOptions}
                    rootClassName="language-select"
                />
                {!isConnected ?
                    <div className="header_right__connect-btn" onClick={handleConnect}>
                        <img src={ConnectionIcon} alt="icon" width={24} height={24}/>
                    </div> :
                    <div className="wallet-address-btn" onClick={handleDisconnect}>
                        <img src={ConnectionIcon} alt="icon" width={24} height={24}/>
                        <span>{address.slice(0, 11) + "..." + address.slice(-4)}</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header