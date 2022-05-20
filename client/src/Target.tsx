import React from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from 'chart.js'
import { Scatter } from 'react-chartjs-2'
import { Hit } from './Hit'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip)

const options = {
  scales: {
    x: {
      min: -100,
      max: 100,
    },
    y: {
      min: -100,
      max: 100,
    },
  },
}

function Target(props: { hits: Hit[] }) {
  const { hits } = props
  const data = {
    datasets: [
      {
        data: hits,
        backgroundColor: '#4338CA',
      },
    ],
  }

  return <Scatter {...{ data, options }} width={100} height={100} />
}

export default Target
