import React, {Component} from 'react';
import { Text, View} from 'react-native';

import { AreaChart,BarChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
 
export default class chart extends Component {
 
    render() {
        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

        const fill = randomColor();
        const data   = [ 50, 10, 40, 95, -4, -24, null, 85, undefined, 0, 35, 53, -53, 24, 50, -20, -80 ] ;
        return (
            // <AreaChart
            //     style={{ height: 200 }}
            //     data={ data }
            //     contentInset={{ top: 30, bottom: 30 }}
            //     curve={ shape.curveNatural }
            //     svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            // >
            //     <Grid/>
            // </AreaChart>
           
                 <BarChart
                     style={{ height: 200 }}
                     data={ data }
                     svg={{ fill }}
                     contentInset={{ top: 30, bottom: 30 }}
                 >
                 <Text> { data }</Text>
                 
                     <Grid/>
                 </BarChart>
            
        )
    }
}