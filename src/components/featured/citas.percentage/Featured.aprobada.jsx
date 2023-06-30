import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedAprobada = () => {
    const [percentage, setPercentage] = useState(0);
    const [approvedAppointmentsCount, setApprovedAppointmentsCount] = useState(0);  // Store count of approved appointments

    useEffect(() => {
        const fetchAppointmentData = async () => {
            try {
                const appointmentsResponse = await axios.get('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Cita');
                const approvedAppointments = appointmentsResponse.data.body.filter(appointment => appointment.Estado_Cita === 'Aprobada');
                
                const approvedCount = approvedAppointments.length;
                const totalCount = appointmentsResponse.data.body.length;
                
                const percentage = Math.round((approvedCount / totalCount) * 100);
                
                setPercentage(percentage);
                setApprovedAppointmentsCount(approvedCount);  // set count of approved appointments
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchAppointmentData();
    }, []);

    return (
        <div className="featureddon">
            <div className="topdon">
                <h1 className="titledon">Citas Aprobadas</h1>
                {/* <MoreVertOutlinedIcon fontSize="small"/> */}
            </div>
            <div className="bottomdon">
                <div className="featuredChartdon">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} styles={buildStyles({pathColor: 'green', textColor: 'green'})}/>
                </div>
                <div className="countContainedon">  {/* Added count container */}
                    {`Cantidad: ${approvedAppointmentsCount}`}
                </div>
            </div>
        </div>
    )
}

export default FeaturedAprobada
