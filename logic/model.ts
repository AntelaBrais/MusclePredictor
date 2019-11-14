import * as tf from '@tensorflow/tfjs'
import { rawData } from './datas/rawData'

let rawDataIn3d = tf.tensor3d(rawData)
let dataIn2d = rawDataIn3d.as2D(4000, 3)

// let labelList = [
//   'LowerLeg',
//   'Thigh',
//   'Gluteus',
//   'Abdomen',
//   'Pectoral',
//   'Deltoid',
//   'Arm',
//   'Forearm'
// ]

console.log(dataIn2d.shape)
