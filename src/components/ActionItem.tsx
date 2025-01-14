import React from "react";
import ZigzagIconGreen from "../assets/zigzag-icon-green.svg";

function ActionItem ({item,t}:any) {
    return (
        <div className="actions-item">
            <div className="actions-item_top">
                <div className="actions-item_top__left">
                    <div className="actions-item_top__left___title">{t(item.title)}</div>
                    <div className="actions-item_top__left___count">{item.actionNumber}</div>
                </div>
                <img src={item.icon} alt=""/>
            </div>
            <div className="actions-item_bottom">
                <img src={ZigzagIconGreen} alt=""/>
                <div className="actions-item_bottom__percent">{item.actionPercent}%</div>
                <div className="actions-item_bottom__text">{t('С прошлой недели')}</div>
            </div>
        </div>
    )
}

export default ActionItem