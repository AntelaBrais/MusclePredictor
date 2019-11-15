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
labelsTensor.dispose()

let model: any

model = tf.sequential()

let hiddenLayer = tf.layers.dense({
  units: 16,
  activation: 'sigmoid',
  inputDim: 2
})

let outputLayer = tf.layers.dense({
  units: 8,
  activation: 'softmax'
})

model.add(hiddenLayer)
model.add(outputLayer)

const learningRate = 0.2
const optimizer = tf.train.sgd(learningRate)

model.compile({
  optimizer,
  loss: 'categoricalCrossentropy'
})

async function trainNeuralNet() {
  await model.fit(dataTensor, ys, {
    epochs: 500,
    batchSize: 20,
    validationSplit: 0.15,
    shuffle: true,
    callbacks: {
      onTrainBegin: () => {
        console.log('Training started')
      },
      onTrainEnd: () => {
        console.log('Training ended')
        makePrediction()
      },
      onEpochEnd: (num: any, logs: any) => {
        console.log('Epoch:' + num)
        console.log(tf.memory().numTensors)
        console.log('Loss:' + logs.loss)
      }
    }
  })
}

trainNeuralNet()

async function makePrediction() {
  let result = await model.predict(tf.tensor2d([[0.402, 0.3]]))
  let labelPredicted = result.argMax(1)
  labelPredicted.print()
}
