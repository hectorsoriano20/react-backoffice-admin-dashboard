import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedRechazadaCompra = () => {
    const [percentage, setPercentage] = useState(0);
    const [rejectedAppointmentsCount, setRejectedAppointmentsCount] = useState(0);  // Store count of approved appointments

    useEffect(() => {
        const fetchAppointmentData = async () => {
            try {
                const appointmentsResponse = await axios.get('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/CompraSangre');
                const rejectedAppointments = appointmentsResponse.data.body.filter(appointment => appointment.Estatus_Compra === 'Rechazada');
                
                const rejectedCount = rejectedAppointments.length;
                const totalCount = appointmentsResponse.data.body.length;
                
                const percentage = Math.round((rejectedCount / totalCount) * 100);
                
                setPercentage(percentage);
                setRejectedAppointmentsCount(rejectedCount);  // set count of approved appointments
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchAppointmentData();
    }, []);

    return (
        <div className="featureddon">
            <div className="topdon">
                <h1 className="titledon">Solicitudes Rechazadas</h1>
                {/* <MoreVertOutlinedIcon fontSize="small"/> */}
            </div>
            <div className="bottomdon">
                <div className="featuredChartdon">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} styles={buildStyles({pathColor: 'red', textColor: 'red'})}/>
                </div>
                <div className="countContainedon">  {/* Added count container */}
                    {`Cantidad: ${rejectedAppointmentsCount}`}
                </div>
            </div>
        </div>
    )
}

export default FeaturedRechazadaCompra
