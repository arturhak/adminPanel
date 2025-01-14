import React from "react";

function ReferralTable({referralTableData, t}:any) {
    return (
        <div className="referral-table">
            <div className="referral-table_header">
                <div className="referral-table_header__title">{t('Адрес кошелька')}</div>
                <div className="referral-table_header__title">{t('Джекпот')}</div>
                <div className="referral-table_header__title">{t('Мега Джекпот')}</div>
            </div>

            <div className="table-body">
                {referralTableData.map((row:any, index:any) => {
                    return (
                        <div className="table-row" key={index}>
                            <div className="table-row_item">{row.wallet_address}</div>
                            <div className="table-row_item">$ {row.jackpot}</div>
                            <div className="table-row_item">$ {row.mega_jackpot}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ReferralTable