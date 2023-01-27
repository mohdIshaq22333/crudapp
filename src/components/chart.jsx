import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line, Chart } from 'react-chartjs-2';
import styles from "styled-components";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
);
const annotation1 = {
    type: 'polygon',
    backgroundColor: 'white',
    backgroundShadowColor: 'black',
    borderColor: 'red',
    borderJoinStyle: 'round',
    borderWidth: 7,
    radius: 40,
    rotation: 180,
    shadowBlur: 3,
    shadowOffsetX: 3,
    shadowOffsetY: 10,
    xValue: (ctx) => value(ctx, 0, 2, 'x'),
    yValue: (ctx) => value(ctx, 0, 2, 'y')
  };
export default function App() {
    const options = {
     responsive: true,
     bezierCurve:true,
     elements: {
        point:{
            radius: 0
        }
    },
     plugins: {
},

       scales:{
        x: {
            grid: {
              display: false,
            },
            border:{
              display:false
            }
          },
          y: {
            grid: {
            tickBorderDash: [8, 4],
            tickBorderDashOffset:5
            },
            border:{
              display:false
            }
          }

       },
       annotation: {
        annotations: {
          annotation1,
        }
      }
    };
    
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    
    const data = {
     labels,
     datasets: [
       {
         fill: true,
        //  label: 'Dataset 2',
        fill: '+1',
         data: [90, 50,10,20,0, 5,10,30,40],
         borderColor: 'rgb(53, 162, 235)',
         backgroundColor: 'linear-gradient(to right, red , yellow)',
    tension:0.4,
        },
     ],
    };  
    return (
    <MainDiv>
<div className="chartCont">

        <Line
data={data}
options={options}
        />
</div>

    </MainDiv>
  );
}

const MainDiv=styles.div`
background: white;
width: 100vw;
display: flex;
height:100vh;
align-items: center;
justify-content: center;
.chartCont{
    width:500px;
}
`;