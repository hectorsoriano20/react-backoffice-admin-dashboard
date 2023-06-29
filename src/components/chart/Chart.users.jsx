import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { format, parseISO } from "date-fns";
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, Tooltip, Area } from 'recharts';
import "./chart.scss"

const ChartUsers = ({aspect, title}) => {
    const { id } = useParams();
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resPersona = await axios.get(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona/${id}`);
                const Cedula_Persona = resPersona.data.body.Cedula_Persona;

                const resPintas = await axios.get(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/Cedula/${Cedula_Persona}`);
                const pintas = resPintas.data.body;

                const monthData = Array(7).fill(0); 

                pintas.forEach(pinta => {
                    const month = format(parseISO(pinta.FechaDonacion_Pinta), 'M') - 1;
                    if (month >= 1 && month <= 7) {
                        monthData[month - 1]++;
                    }
                });

                const data = monthData.map((count, index) => ({
                    name: format(new Date(2023, index + 1), 'MMMM'),
                    Total: count
                }));

                setChartData(data);

            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, [id]);

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

export default ChartUsers
