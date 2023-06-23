import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

const Chart = ({aspect, title}) => {
    const [chartData, setChartData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta');
          const pintas = response.data.body;
          
          const monthData = Array(7).fill(0);  // Array to hold count of pintas for each month from February to August

          pintas.forEach(pinta => {
            const month = format(parseISO(pinta.FechaDonacion_Pinta), 'M') - 1;  // Get month number from date (0-indexed)
            if (month >= 1 && month <= 7) { // Only count months from February (1) to August (7)
              monthData[month - 1]++; // Adjust index to start from 0 for February
            }
          });

          const data = monthData.map((count, index) => ({
            name: format(new Date(2023, index + 1), 'MMMM'), // Get month name from month number, adjust index to start from 0 for February
            Total: count
          }));

          setChartData(data);

        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

      fetchData();
    }, []);

    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" height={200}>
                <AreaChart
                  width={500}
                  height={400}
                  data={chartData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <Tooltip />
                  <Area type="monotone" dataKey="Total" stroke="#d03932" fill="#ff6d67" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
