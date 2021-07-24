import React from 'react'
import './home.css'
import FeaturedInfo from '../../FeaturedInfo/FeaturedInfo'
import Chart from '../../chart/Chart'
import {data} from '../../../data/dummydata'
function Home() {
    return (
        <div className='home'>
            <FeaturedInfo/>
            <Chart data={data} title="Sales Analytics" dataKey="Active User" grid/>
        </div>
    )
}

export default Home
