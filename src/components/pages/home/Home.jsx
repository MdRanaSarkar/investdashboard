import React from 'react'
import './home.css'
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo'
import Chart from '../../chart/Chart'
import {data} from '../../../data/dummydata'
import Widgetsm from '../../widgetsm/Widgetsm'
import Widgetlg from '../../widgetlg/Widgetlg'
function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={data} title="Sales Analytics" dataKey="Active User" grid/>
            <div className="homewidget">
            <Widgetsm/>
            <Widgetlg/>
            </div>
        </div>
    )
}

export default Home
