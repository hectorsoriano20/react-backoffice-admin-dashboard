import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { useEffect, useState } from 'react';
import axios from 'axios';

const Featured = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const fetchActiveUsers = async () => {
            try {
                const activeUsersResponse = await axios.get('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona/Tipo/Activo');
                const totalUsersResponse = await axios.get('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona');
                
                const activeUsersCount = activeUsersResponse.data.body.length;
                const totalUsersCount = totalUsersResponse.data.body.length;
                
                const percentage = Math.round((activeUsersCount / totalUsersCount) * 100);
                
                setPercentage(percentage);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchActiveUsers();
    }, []);

    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">Donantes activos</h1>
                {/* <MoreVertOutlinedIcon fontSize="small"/> */}
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} styles={buildStyles({pathColor: '#ff6d67', textColor: '#ff6d67'})}/>
                </div>
                {/* <p className="title">Capacidad de Pintas</p>
                <p className="amount">100</p> */}
            </div>
        </div>
    )
}

export default Featured
