import React, {useEffect, useState} from "react";

function ChartGroup(itemData: any) {
    const [heights, setHeights] = useState<any>({
        itemData: [
            {
                height: 0,
                color: ""
            }, {
                height: 0,
                color: ""
            }, {
                height: 0,
                color: ""
            }, {
                height: 0,
                color: ""
            },
        ]
    });

    useEffect(() => {
        setHeights(itemData);
    }, [itemData]);
    console.log("height====>", heights)

    return (
        <div className="charts-content">
            <div className="charts-group">
                {heights.itemData?.map((item: any, index: any) => {
                    return (
                        <div
                            key={index}
                            className="chart"
                            style={{height: `${item.height}px`, background: `${item.color}`}}
                        >
                        </div>
                    )
                })
                }
            </div>
            <div>Янв</div>
        </div>
    )
}

export default ChartGroup