import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

export default function Graph({ labels, data, text, color, stocks, selectedStock, setSelectedStocks, predicted}) {
   const ref = useRef()

   useEffect(() => {
    const chart = new Chart(ref.current.getContext('2d'), {
      type: 'line',
      data: {
          labels,
          datasets: [{
              label: 'Actual Price',
              data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 3
          },
          {
            label: 'Predicted Price',
            data: predicted,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 3
        }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
          plugins: {
            title: {
                display: true,
                text,
                color,
                fullSize:true,
                padding: {
                    top: 10,
                    bottom: 30
                },
                font: {
                    size: '30em'
                }
            },
           
        }
      }
  });
  return () => {
    chart.destroy()
  }
   },[ labels, data, text, color])


    return (

    
     <div style={{height:'90vh',width:'100vw',display:'flex', justifyContent:'space-around'}}>
         <div className="list-group" style ={{marginTop:'5em', width:"20em"}}>
         {stocks.map((stock, index) => {
            if(index ===selectedStock){
                return  <a onClick={() =>setSelectedStocks(index)} style ={{cursor:"pointer"}} className="list-group-item list-group-item-action list-group-item-primary" key= {index}>{stock}</a>
            }else{
                return <a onClick={() =>setSelectedStocks(index)} style ={{cursor:"pointer"}} className="list-group-item list-group-item-action list-group-item-light" key ={ index }>{stock}</a>
            }
         })}
         </div>
      <div className="chart-container" style={{height:'60vh',width:'60vw'}}>
        <canvas ref ={ ref } id="chart"></canvas>
      </div>
     </div>
    
        
    )
  }
  