import * as tf from '@tensorflow/tfjs'
import fs from 'fs'

let abdomenPoints = {
  minX: 0.3895,
  minY: 0.587,
  maxX: 0.4775,
  maxY: 0.782
}

let gluteusPoints = {
  minX: 0.3775,
  minY: 0.487,
  maxX: 0.4775,
  maxY: 0.587
}

let thighPoints = {
  minX: 0.3775,
  minY: 0.242,
  maxX: 0.4775,
  maxY: 0.487
}

let lowerLegPoints = {
  minX: 0.4,
  minY: 0,
  maxX: 0.455,
  maxY: 0.242
}

let pectoralPoints = {
  minX: 0.3895,
  minY: 0.782,
  maxX: 0.4775,
  maxY: 0.876
}

let deltoidPoints = {
  minX: 0.4775,
  minY: 0.782,
  maxX: 0.508,
  maxY: 0.876
}

let armPoints = {
  minX: 0.4775,
  minY: 0.687,
  maxX: 0.508,
  maxY: 0.782
}

let forearmPoints = {
  minX: 0.4775,
  minY: 0.542,
  maxX: 0.508,
  maxY: 0.687
}

export let segmentsPoints = {
  lowerLegPoints,
  thighPoints,
  gluteusPoints,
  abdomenPoints,
  pectoralPoints,
  deltoidPoints,
  armPoints,
  forearmPoints
}

let segmentsPointsArray = [
  lowerLegPoints,
  thighPoints,
  gluteusPoints,
  abdomenPoints,
  pectoralPoints,
  deltoidPoints,
  armPoints,
  forearmPoints
]

interface SegmentDataPoint {
  x: number
  y: number
}

function createPoints(referencePoints: any) {
  referencePoints.map((segment: any, i: number) => {
    const randomX = tf.randomUniform([500, 1], segment.minX, segment.maxX)

    const randomY = tf.randomUniform([500, 1], segment.minY, segment.maxY)

    const dataPoints = tf.concat([randomX, randomY], 1)

    let arriedDataPoints: any = dataPoints.arraySync()

    let pointsArray: Array<SegmentDataPoint> = []

    arriedDataPoints.map((array: any) => {
      let objectifyElement = {
        x: Number(array[0]),
        y: Number(array[1])
      }
      pointsArray.push(objectifyElement)
    })

    fs.writeFileSync(`./logic/datas/s${i}.js`, JSON.stringify(pointsArray))
  })
}

createPoints(segmentsPointsArray)