import React from 'react'
import { Line, Pie } from '@ant-design/charts';
import { Card, Row } from "antd";


function ChartComponent({ sortedTransactions }) {
    const data = sortedTransactions.map((item) => {
        return { date: item.date, amount: item.amount };
    });
    const spendingData = sortedTransactions.filter((transaction) => {
        if (transaction.type == "expense") {
            return { tag: transaction.tag, amount: transaction.amount };
        }
    });

    let finalSpendings = spendingData.reduce((acc, obj) => {
        let key = obj.tag;
        if (!acc[key]) {
            acc[key] = { tag: obj.tag, amount: obj.amount };
        } else {
            acc[key].amount += obj.amount;
        }
        return acc;
    }, {});

    let newSpendings = [{ tag: "food", amount: 0 }, { tag: "education", amount: 0 }, { tag: "travelling", amount: 0 }, { tag: "others", amount: 0 }];
    spendingData.forEach((item) => {
        if (item.tag == "food") {
            newSpendings[0].amount += item.amount;
        } else if (item.tag == "education") {
            newSpendings[1].amount += item.amount;
        } else if (item.tag == "travelling") {
            newSpendings[2].amount += item.amount;
        }
        else {
            newSpendings[3].amount += item.amount;
        }
    });


    const config = {
        data: data,
        width: 500,
        autoFit: true,
        xField: "date",
        yField: "amount",

    };

    const spendingConfig = {
        data: newSpendings,
        //data: Object.values(finalSpendings),
        width: 500,
        angleField: "amount",
        colorField: "tag",
    };

    //return (
    //  <div className="charts-wrapper">
    //    <div>
    //      <h2 style={{ marginTop: 0 }}>Your Analytics</h2>
    //    <Line className="line" {...config} onReady={(chartInstance) => (chart = chartInstance)} />
    //</div>
    //<div>
    //  <h2>Your Spendings</h2>
    //<Pie className="pie" {...spendingConfig} onReady={(chartInstance) => (pieChart = chartInstance)} />
    //</div>
    //</div>
    //);

    const cardStyle = {
        boxShadow: "0px 0px 30px 8px rgba(227, 227, 227, 0.75)",
        margin: "2rem",
        borderRadius: "0.5rem",
        minWidth: "400px",
        flex: 1,
        maxHeight: "500px",
        backgroundColor: "bisque",
    };


    let chart;
    let pieChart;


    return (
        <div>
            <Row gutter={16}>
                <Card bordered={true} style={cardStyle}>
                    <h2>Financial Statistics</h2>
                    <Line className="line" {...config} onReady={(chartInstance) => (chart = chartInstance)} />
                </Card>
                <Card bordered={true} style={{ ...cardStyle, flex: 0.45 }}>

                    <h2>Your Spendings</h2>
                    <Pie className="pie" {...spendingConfig} onReady={(chartInstance) => (pieChart = chartInstance)} />
                </Card>

            </Row>
        </div>
    )
}



export default ChartComponent
