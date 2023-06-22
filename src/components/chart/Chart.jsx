import "./chart.scss"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [

    {
      name: 'Enero',
      Maximo: '100',
      Total: '2',
    },
    {
      name: 'Febrero',
      Total: '10',
    },
    {
      name: 'Marzo',
      Total: '25',
    },
    {
      name: 'Abril',
      Total: '12',
    },
    {
      name: 'Mayo',
      Total: '33',
    },
    {
      name: 'Junio',
      Total: '21',
    },
    {
      name: 'Julio',
      Total: '',
    },
  ];

const Chart = ({aspect, title}) => {
    return (
        <div className="chart">
            <div className="title">{title}</div>
            <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          width={500}
          height={400}
          data={data}
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