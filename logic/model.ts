import * as tf from '@tensorflow/tfjs'
// import { rawData } from './datas/rawData'
import { s0 } from './datas/s0'
import { s1 } from './datas/s1'
import { s2 } from './datas/s2'
import { s3 } from './datas/s3'
import { s4 } from './datas/s4'
import { s5 } from './datas/s5'
import { s6 } from './datas/s6'
import { s7 } from './datas/s7'
import { pointsLabel } from './datas/pointsLabel'

const data = s0.concat(s1, s2, s3, s4, s5, s6, s7)

let dataTensor = tf.tensor2d(data)
let labelsTensor = tf.tensor1d(pointsLabel, 'int32')

let ys = tf.oneHot(labelsTensor, 8)

dataTensor.print()
ys.print()

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
