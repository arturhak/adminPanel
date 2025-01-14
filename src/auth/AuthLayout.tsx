import React, {useEffect, useState} from "react";
import ActionItem from "../components/ActionItem";
import Icon_1 from "../assets/icon_1.svg";
import Icon_2 from "../assets/icon_2.svg";
import Icon_3 from "../assets/icon_3.svg";
import {Progress, Select} from "antd";
import CalendarIcon from "../assets/calendar-icon.svg";
import FilterIcon from "../assets/filter-icon.svg";
import ReferralTable from "../components/ReferralTable";
import ChartGroup from "../components/ChartGroup";
import {footerData} from "../constants/const";

const actionItemsData = [
    {
        title: "Показы",
        icon: Icon_1,
        actionNumber: "10293",
        actionPercent: "1.3"
    },
    {
        title: "Клики",
        icon: Icon_2,
        actionNumber: "11500",
        actionPercent: "1.5"
    },
    {
        title: "Переходы",
        icon: Icon_3,
        actionNumber: "12587",
        actionPercent: "1.7"
    },
];


const allLPeriod = [
    {
        value: 'day',
        label: <span className="selected-content">Эта день</span>
    },
    {
        value: 'week',
        label: <span className="selected-content">Эта неделя</span>
    },
    {
        value: 'month',
        label: <span className="selected-content">Эта месяц</span>
    },
];


function AuthLayout({t}: any) {

    const [period, setPeriod] = useState<any>(allLPeriod.filter(period => period.value === "day"));
    const [selectedPurchaseOptions, setSelectedPurchaseOptions] = useState(allLPeriod.filter(period => period.value !== "day"));
    const [selectedIncomingOptions, setSelectedIncomingOptions] = useState(allLPeriod.filter(period => period.value !== "day"));
    const [selectedReferralOptions, setSelectedReferralOptions] = useState(allLPeriod.filter(period => period.value !== "day"));
    const [selectedChartsOptions, setSelectedChartsOptions] = useState(allLPeriod.filter(period => period.value !== "day"));
    const [jackpotTicketsCount, setJackpotTicketsCount] = useState<any>(null);
    const [jackpotTicketsPercent, setJackpotTicketsPercent] = useState<any>(null);
    const [megaJackpotTicketsCount, setMegaJackpotTicketsCount] = useState<any>(null);
    const [megaJackpotTicketsPercent, setMegaJackpotTicketsPercent] = useState<any>(null);
    const [jackpotTicketsIncomingPercent, setJackpotTicketsIncomingPercent] = useState<any>(null);
    const [megaJackpotTicketsIncomingPercent, setMegaJackpotTicketsIncomingPercent] = useState<any>(null);
    const [referralTableData, setReferralTableData] = useState<any>([]);
    const [chartsData, setChartsData] = useState<any>();



    useEffect(() => {
        const randomNumber1 = Math.floor(Math.random() * 778);
        const randomNumber2 = Math.floor(Math.random() * 778);
        const randomNumber3 = Math.floor(Math.random() * 100);

        setJackpotTicketsCount(randomNumber1)
        setJackpotTicketsPercent(Math.floor(randomNumber1 * 100 / 777))

        setMegaJackpotTicketsCount(randomNumber2)
        setMegaJackpotTicketsPercent(Math.floor(randomNumber2 * 100 / 777))

        setJackpotTicketsIncomingPercent(randomNumber3)
        setMegaJackpotTicketsIncomingPercent(100 - randomNumber3)

        // fetch and set data
        setReferralTableData([
            {
                wallet_address: '0x923...23cG',
                jackpot: "256.36",
                mega_jackpot: '218.42',
            },
            {
                wallet_address: '0x851...23g7',
                jackpot: "206.11",
                mega_jackpot: '118.75',
            },
            {
                wallet_address: '0x122...12v5',
                jackpot: "236.17",
                mega_jackpot: '354.82',
            },
            {
                wallet_address: '0x854...45b9',
                jackpot: "546.84",
                mega_jackpot: '894.51',
            },
            {
                wallet_address: '0x852...47b4',
                jackpot: "140.52",
                mega_jackpot: '124.23',
            },
            {
                wallet_address: '0x742...52m8',
                jackpot: "725.24",
                mega_jackpot: '987.98',
            },
        ])
    }, []);

    useEffect(() => {
        const newHeights_1: any = [
            {
                height: Math.random() * 100,
                color: "#8657FF"
            }, {
                height: Math.random() * 100,
                color: "#4E74FF"
            }, {
                height: Math.random() * 100,
                color: "#00B69B"
            }, {
                height: Math.random() * 100,
                color: "#B6AF00"
            },
        ];
        const newHeights_2: any = [
            {
                height: Math.random() * 100,
                color: "#8657FF"
            }, {
                height: Math.random() * 100,
                color: "#4E74FF"
            }, {
                height: Math.random() * 100,
                color: "#00B69B"
            }, {
                height: Math.random() * 100,
                color: "#B6AF00"
            },
        ];
        const newHeights_3: any =[
            {
                height: Math.random() * 100,
                color: "#8657FF"
            }, {
                height: Math.random() * 100,
                color: "#4E74FF"
            }, {
                height: Math.random() * 100,
                color: "#00B69B"
            }, {
                height: Math.random() * 100,
                color: "#B6AF00"
            },
        ];
        const newHeights_4: any = [
            {
                height: Math.random() * 100,
                color: "#8657FF"
            }, {
                height: Math.random() * 100,
                color: "#4E74FF"
            }, {
                height: Math.random() * 100,
                color: "#00B69B"
            }, {
                height: Math.random() * 100,
                color: "#B6AF00"
            },
        ];
        const newHeights_5: any = [
            {
                height: Math.random() * 100,
                color: "#8657FF"
            }, {
                height: Math.random() * 100,
                color: "#4E74FF"
            }, {
                height: Math.random() * 100,
                color: "#00B69B"
            }, {
                height: Math.random() * 100,
                color: "#B6AF00"
            },
        ];
        const newHeights_6: any = [
            {
                height: Math.random() * 100,
                color: "#8657FF"
            }, {
                height: Math.random() * 100,
                color: "#4E74FF"
            }, {
                height: Math.random() * 100,
                color: "#00B69B"
            }, {
                height: Math.random() * 100,
                color: "#B6AF00"
            },
        ];
        let allData: any = [newHeights_1, newHeights_2, newHeights_3, newHeights_4, newHeights_5, newHeights_6];
        setChartsData(allData)
    }, [])

    const handleChangePurchaseData = (value: any) => {
        setPeriod(value)
        console.log("event=>>>>>>>>>.", value)
        const newOptions = allLPeriod.filter(period => period.value !== value);
        console.log("newOptions",newOptions)
        setSelectedPurchaseOptions(newOptions);
        // fetch and setState tickets count (in Switch Case from value changed)

        const randomNumber4 = Math.floor(Math.random() * 777);
        const randomNumber5 = Math.floor(Math.random() * 777);

        setJackpotTicketsCount(randomNumber4)
        setJackpotTicketsPercent(Math.round(randomNumber4 * 100 / 777))

        setMegaJackpotTicketsCount(randomNumber5)
        setMegaJackpotTicketsPercent(Math.round(randomNumber5 * 100 / 777))
    };

    const handleChangeTotalIncomeData = (value: any) => {
        setPeriod(value)
        console.log("handleChangeTotalIncomeData=>>>>>>>>>.", value)
        const newOptions = allLPeriod.filter(period => period.value !== value);
        setSelectedIncomingOptions(newOptions);
        // fetch and setState tickets count (in Switch Case from value changed)
        const randomNumber = Math.round(Math.random() * 100);

        setJackpotTicketsIncomingPercent(randomNumber)
        setMegaJackpotTicketsIncomingPercent(100 - randomNumber)
    };

    const handleChangeReferralData = (value: any) => {
        setPeriod(value)
        console.log("handleChangeTotalIncomeData=>>>>>>>>>.", value);
        const newOptions = allLPeriod.filter(period => period.value !== value);
        setSelectedReferralOptions(newOptions);

        // fetch ang get data
        setReferralTableData([
            {
                wallet_address: '0x984...77c7',
                jackpot: "156.06",
                mega_jackpot: '208.09',
            },
            {
                wallet_address: '0x254...53v5',
                jackpot: "236.17",
                mega_jackpot: '354.82',
            },
            {
                wallet_address: '0x854...85b4',
                jackpot: "546.54",
                mega_jackpot: '454.51',
            },
            {
                wallet_address: '0x321...89b1',
                jackpot: "940.52",
                mega_jackpot: '854.23',
            },
            {
                wallet_address: '0h698...52b2',
                jackpot: "215.23",
                mega_jackpot: '187.02',
            },
        ])

    };

    const handleChangeChartsData = (value: any) => {
        setPeriod(value)
        console.log("CHARTSVALUE=>>>>>>>>>.", value);
        const newOptions = allLPeriod.filter(period => period.value !== value);
        setSelectedChartsOptions(newOptions);

        // set switch case if day month and ....

        // fetch ang get data
        const newHeights_1: any = [
            {
                height: Math.random() * 100,
                color: "#8657FF"
            }, {
                height: Math.random() * 100,
                color: "#4E74FF"
            }, {
                height: Math.random() * 100,
                color: "#00B69B"
            }, {
                height: Math.random() * 100,
                color: "#B6AF00"
            },
        ];
        const newHeights_2: any = [
            {
                height: Math.random() * 100,
                color: "#8657FF"
            }, {
                height: Math.random() * 100,
                color: "#4E74FF"
            }, {
                height: Math.random() * 100,
                color: "#00B69B"
            }, {
                height: Math.random() * 100,
                color: "#B6AF00"
            },
        ];
        const newHeights_3: any =[
            {
                height: Math.random() * 100,
                color: "#8657FF"
            }, {
                height: Math.random() * 100,
                color: "#4E74FF"
            }, {
                height: Math.random() * 100,
                color: "#00B69B"
            }, {
                height: Math.random() * 100,
                color: "#B6AF00"
            },
        ];
        const newHeights_4: any = [
            {
                height: Math.random() * 100,
                color: "#8657FF"
            }, {
                height: Math.random() * 100,
                color: "#4E74FF"
            }, {
                height: Math.random() * 100,
                color: "#00B69B"
            }, {
                height: Math.random() * 100,
                color: "#B6AF00"
            },
        ];
        const newHeights_5: any = [
            {
                height: Math.random() * 100,
                color: "#8657FF"
            }, {
                height: Math.random() * 100,
                color: "#4E74FF"
            }, {
                height: Math.random() * 100,
                color: "#00B69B"
            }, {
                height: Math.random() * 100,
                color: "#B6AF00"
            },
        ];
        const newHeights_6: any = [
            {
                height: Math.random() * 100,
                color: "#8657FF"
            }, {
                height: Math.random() * 100,
                color: "#4E74FF"
            }, {
                height: Math.random() * 100,
                color: "#00B69B"
            }, {
                height: Math.random() * 100,
                color: "#B6AF00"
            },
        ];
        let allData: any = [newHeights_1, newHeights_2, newHeights_3, newHeights_4, newHeights_5, newHeights_6];
        setChartsData(allData)
    };

    return (
        <div className="auth-layout">
            <div className="auth-layout_title">{t('Панель управления')}</div>

            {/*Actions Block*/}
            <div className="actions-block">
                {actionItemsData.map((item, index) => {
                    return (
                        <ActionItem
                            key={index}
                            item={item}
                            t={t}
                        />
                    )
                })}
            </div>
            {/*End Actions Block*/}

            {/*Purchase Block*/}
            <div className="purchase-block">
                <div className="purchase-block_top">
                    <div className="purchase-block_top__left">
                        <div className="purchase-block_top__left___title">
                            {t('Покупки товара')}
                        </div>
                        <div className="purchase-block_top__left___subtitle">{('Общий объем продаж')}: {930} билетов
                        </div>
                    </div>
                    <Select
                        defaultValue={period}
                        onChange={handleChangePurchaseData}
                        options={selectedPurchaseOptions}
                        prefix={<img src={CalendarIcon} alt="icon"/>}
                        rootClassName="purchase-select"
                    />
                </div>
                <div className="purchase-progress-block">
                    <div className="purchase-progress-block_title">
                        <div className="purchase-progress-block_title__left">
                            {t('Джекпот')}
                        </div>
                        <div className="purchase-progress-block_title__right">
                            {jackpotTicketsCount} билетов ({jackpotTicketsPercent} %)
                        </div>
                    </div>
                    <Progress
                        percent={jackpotTicketsPercent}
                        size={["100%", 15]}
                        strokeColor="#2B1EF5"
                        trailColor='#272D41'
                        showInfo={false}
                    />
                </div>
                <div className="purchase-progress-block">
                    <div className="purchase-progress-block_title">
                        <div className="purchase-progress-block_title__left">
                            {t('Мега Джекпот')}
                        </div>
                        <div className="purchase-progress-block_title__right">
                            {megaJackpotTicketsCount} билетов ({megaJackpotTicketsPercent} %)
                        </div>

                    </div>
                    <Progress
                        percent={megaJackpotTicketsPercent}
                        size={["100%", 15]}
                        strokeColor="#9F2CF6"
                        trailColor='#272D41'
                        showInfo={false}
                    />
                </div>
            </div>
            {/*End Purchase Block*/}

            {/*Income Block*/}
            <div className="income-block">
                <div className="income-block_item">
                    <div className="income-block_item__header">
                        <div className="income-block_item__header___left">
                            <div className="income-block_item__header___left____title">
                                {t('Общий Доход')}
                            </div>
                            <div className="income-block_item__header___left____count">
                                $ {14293}
                            </div>
                        </div>
                        <Select
                            defaultValue={period}
                            onChange={handleChangeTotalIncomeData}
                            options={selectedIncomingOptions}
                            prefix={<img src={CalendarIcon} alt="icon"/>}
                            rootClassName="purchase-select"
                        />
                    </div>
                    <div className="circle-chart-block">
                        <Progress
                            type="circle"
                            percent={jackpotTicketsIncomingPercent}
                            strokeColor="#2B1EF5"
                            trailColor='#9F2CF6'
                            showInfo={false}
                            strokeWidth={18}
                            strokeLinecap="butt"
                            size={[170,0]}
                        />
                        <div className="circle-chart-block_right">
                            <div className="circle-chart-block_right__item">
                                <div className="circle-chart-block_right__item___title">
                                    <div className="circle-chart-block_right__item___title____color"
                                         style={{background: "#2B1EF5"}}>
                                    </div>
                                    <div className="circle-chart-block_right__item___title____text">{t('Джекпот')}</div>
                                </div>
                                <div className="circle-chart-block_right__item___info">
                                    <div className="circle-chart-block_right__item___info____price">
                                        $ {52.66}
                                    </div>
                                    <div className="circle-chart-block_right__item___info____percent"
                                         style={{width: `${jackpotTicketsIncomingPercent}%`, background: "#2B1EF5"}}>
                                    </div>
                                    <span>{jackpotTicketsIncomingPercent}%</span>
                                </div>

                            </div>
                            <div className="line">
                            </div>
                            <div className="circle-chart-block_right__item" style={{paddingBottom: "0"}}>
                                <div className="circle-chart-block_right__item___title">
                                    <div className="circle-chart-block_right__item___title____color"
                                         style={{background: "#9F2CF6"}}>
                                    </div>
                                    <div
                                        className="circle-chart-block_right__item___title____text">{t('Мега Джекпот')}</div>
                                </div>
                                <div className="circle-chart-block_right__item___info">
                                    <div className="circle-chart-block_right__item___info____price">
                                        $ {635.18}
                                    </div>
                                    <div className="circle-chart-block_right__item___info____percent"
                                         style={{width: `${megaJackpotTicketsIncomingPercent}%`, background: "#9F2CF6"}}>
                                    </div>
                                    <span>{megaJackpotTicketsIncomingPercent}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="income-block_item">
                    <div className="income-block_item__header">
                        <div className="income-block_item__header___left">
                            <div className="income-block_item__header___left____title">
                                {t('Доход с реферала')}
                            </div>
                            <div className="income-block_item__header___left____count">
                                $ {10293}
                            </div>
                        </div>
                        <Select
                            defaultValue={period}
                            onChange={handleChangeReferralData}
                            options={selectedReferralOptions}
                            prefix={<img src={FilterIcon} alt="icon"/>}
                            rootClassName="purchase-select"
                        />
                    </div>
                    <ReferralTable
                        referralTableData={referralTableData}
                        t={t}
                    />
                </div>
            </div>
            {/*End Income Block*/}

            <div className="charts-block">
                <div className="charts-block_header">
                    <div className="charts-block_header___title">
                        {t('Канал привлечения пользователей')}
                    </div>
                    <Select
                        defaultValue={period}
                        onChange={handleChangeChartsData}
                        options={selectedChartsOptions}
                        prefix={<img src={CalendarIcon} alt="icon"/>}
                        rootClassName="purchase-select"
                    />
                </div>

                <div className="charts-block_content">
                    <div className="charts-block_content_line" ></div>
                    <div className="charts-block_content_line" style={{marginTop: '33.4px'}}></div>
                    <div className="charts-block_content_line" style={{marginTop: '66.8px'}}></div>
                    <div className="charts-block_content_line" style={{marginTop: '101px'}}></div>
                    {chartsData && chartsData.map((data: any, index: number) => {
                        return (
                            <ChartGroup
                                key={index}
                                itemData={data}
                            />
                        )
                    })}
                </div>

                <div className="charts-block_footer">
                    {footerData.map((data) => {
                        return (
                            <div className="charts-block_footer__item">
                                <div className="charts-block_footer__item___color" style={{background: `${data.color}`}}>
                                </div>
                                <div className="charts-block_footer__item___text">
                                    {t(data.text)}
                                </div>
                            </div>
                            )})}
                </div>
            </div>

        </div>
    )
}

export default AuthLayout