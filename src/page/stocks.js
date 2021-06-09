import {useState, useEffect } from 'react';
import Graph from '../components/graph'

export default function Stocks() {

  const predictionData = [
    {labels: ['2021-05-20', '2021-05-26', '2021-05-31', '2021-06-3', '2021-05-8', '2021-05-9'], data: [14906, 15301, 15582, 15690, 15740, 15635], text: "NIFTY50", predicted: [14639, 14818, 14988, 15186, 15330, 15364]},
    {labels: ['2021-05-20', '2021-05-26', '2021-05-31', '2021-06-3', '2021-05-8', '2021-05-9'], data: [33334, 34684, 35526, 35649, 35085, 34800], text: "NIFTYBANK", predicted: [32925, 33905, 34318, 34651, 34748, 34673]},
    {labels: ['2021-05-20', '2021-05-26', '2021-05-31', '2021-06-3', '2021-05-8', '2021-05-9'], data: [25894, 26857, 27115, 26987, 27623, 27539], text: "NIFTYIT", predicted: [25428, 25579, 26039, 26268, 26403, 26526]},
    {labels: ['2021-05-20', '2021-05-26', '2021-05-31', '2021-06-3', '2021-05-8', '2021-05-9'], data: [973.099976, 1007.799988, 1021.650024, 1014.349976, 1057.750000, 1052.250000], text: "TECHMAHINDRA", predicted: [947.969177, 966.268982, 996.600098, 1006.58990, 1001.70929, 1011.42681]},
    {labels: ['2021-05-20', '2021-05-26', '2021-05-31', '2021-06-3', '2021-05-8', '2021-05-9'], data: [3060.000000, 3158.500000, 3159.149902, 3141.250000, 3200.149902, 3200.250000], text: "TCS", predicted: [3184.290283, 3198.946045, 3277.462891, 3270.321777, 3259.141602, 3277.014648]},
    {labels: ['2021-05-20', '2021-05-26', '2021-05-31', '2021-06-3', '2021-05-8', '2021-05-9'], data: [307.700012, 315.500000, 318.750000, 325.649994, 352.750000, 343.350006], text: "TATAMOTORS", predicted: [310.745819, 299.775299, 304.435852, 308.073792, 322.669922, 331.009125]},
    {labels: ['2021-05-20', '2021-05-26', '2021-05-31', '2021-06-3', '2021-05-8', '2021-05-9'], data: [520.650024, 525.750000, 534.900024, 532.049988, 546.799988, 540.000000], text: "NIFTY50", predicted: [498.650940, 497.955994, 494.709900, 502.119507, 504.833984, 511.921051]},
   ]
   const [selectedStock, setSelectedStocks] = useState(0)
  const [labels, setLabels] = useState(predictionData[0].labels)
  const [data, setData] = useState(predictionData[0].data)
  const [text, setText] = useState(predictionData[0].text)
  const [predicted, setPredicted] = useState(predictionData[0].predicted)
  const [color, setColor] = useState('Blue')
  const [stocks, setStocks] = useState(predictionData.map(prediction => prediction.text))
  
  useEffect(() => {
    setLabels(predictionData[selectedStock].labels)
    setData(predictionData[selectedStock].data)
    setPredicted(predictionData[selectedStock].predicted)
  },[selectedStock])
  
    return (
     <>
       <div style={{height:'100vh',width:'100vw',background:'#f7f8ff'}}>
       <Graph  labels = {labels} data = { data } text = {text} color = {color} stocks = {stocks} selectedStock= {selectedStock} setSelectedStocks= {setSelectedStocks} predicted = {predicted}/> 
       </div>
      
     </>
    )
  }
  