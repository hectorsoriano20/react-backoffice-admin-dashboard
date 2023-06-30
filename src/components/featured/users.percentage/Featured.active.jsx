import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedActive = () => {
    const [percentage, setPercentage] = useState(0);
    const [activeUsersCount, setActiveUsersCount] = useState(0);  // added to store count of active users

    useEffect(() => {
        const fetchActiveUsers = async () => {
            try {
                const activeUsersResponse = await axios.get('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona/Tipo/Activo');
                const totalUsersResponse = await axios.get('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona');
                
                const activeCount = activeUsersResponse.data.body.length;
                const totalCount = totalUsersResponse.data.body.length;
                
                const percentage = Math.round((activeCount / totalCount) * 100);
                
                setPercentage(percentage);
                setActiveUsersCount(activeCount);  // set count of active users
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchActiveUsers();
    }, []);

    return (
        <div className="featureddon">
            <div className="topdon">
                <h1 className="titledon">Donantes activos</h1>
                {/* <MoreVertOutlinedIcon fontSize="small"/> */}
            </div>
            <div className="bottomdon">
                <div className="featuredChartdon">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} styles={buildStyles({pathColor: 'green', textColor: 'green'})}/>
                </div>
                <div className="countContainedon">  {/* Added count container */}
                    {`Cantidad: ${activeUsersCount}`}
                </div>
            </div>
        </div>
    )
}

export default FeaturedActive
