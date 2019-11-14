import * as React from 'react'
import { Scatter } from 'react-chartjs-2'
import { s0 } from '../logic/datas/s0'
import { s1 } from '../logic/datas/s1'
import { s2 } from '../logic/datas/s2'
import { s3 } from '../logic/datas/s3'
import { s4 } from '../logic/datas/s4'
import { s5 } from '../logic/datas/s5'
import { s6 } from '../logic/datas/s6'
import { s7 } from '../logic/datas/s7'

function IndexPage() {
  let maxPoints = [
    { x: 0, y: 0 },
    { x: 1, y: 1 }
  ]
  const data = s0.concat(s1, s2, s3, s4, s5, s6, s7, maxPoints)

  const scatterConfig = {
    labels: ['Scatter'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data
      }
    ]
  }

  return (
    <div>
      <h1>Hello Next.js 👋</h1>
      <Scatter data={scatterConfig}></Scatter>
    </div>
  )
}

export default IndexPage
