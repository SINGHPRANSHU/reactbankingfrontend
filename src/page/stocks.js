import {useState } from 'react';
import Graph from '../components/graph'

export default function Stocks() {

  const [labels, setLabels] = useState(['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange','r', 'y', 'z', 'k'])
  const [data, setData] = useState([12, 19, 3, 5, 2, 3, 10,11,7,6])
  const [text, setText] = useState('Custom Chart Title')
  const [color, setColor] = useState('Blue')
  const [stocks, setStocks] = useState(['A simple light list group item','A simple light list group item','A simple light list group item','A simple light list group item','A simple light list group item','A simple light list group item','A simple light list group item','A simple light list group item'])
  const [selectedStock, setSelectedStocks] = useState(0)
    return (

     <>
       <div style={{height:'100vh',width:'100vw',background:'#f7f8ff'}}>
       <Graph  labels = {labels} data = { data } text = {stocks.length?stocks[selectedStock]:''} color = {color} stocks = {stocks} selectedStock= {selectedStock} setSelectedStocks= {setSelectedStocks}/> 
       </div>
      
     </>
    )
  }
  