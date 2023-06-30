import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { useEffect, useState } from 'react';
import axios from 'axios';

const FeaturedInactive = () => {
    const [percentage, setPercentage] = useState(0);
    const [InactiveUsersCount, setInactiveUsersCount] = useState(0);  // added to store count of active users

    useEffect(() => {
        const fetchActiveUsers = async () => {
            try {
                const InactiveUsersResponse = await axios.get('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona/Tipo/Inactivo');
                const totalUsersResponse = await axios.get('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona');
                
                const InactiveCount = InactiveUsersResponse.data.body.length;
                const totalCount = totalUsersResponse.data.body.length;
                
                const percentage = Math.round((InactiveCount / totalCount) * 100);
                
                setPercentage(percentage);
                setInactiveUsersCount(InactiveCount);  // set count of active users
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchActiveUsers();
    }, []);

    return (
        <div className="featureddon">
            <div className="topdon">
                <h1 className="titledon">Donantes Inactivos</h1>
                {/* <MoreVertOutlinedIcon fontSize="small"/> */}
            </div>
            <div className="bottomdon">
                <div className="featuredChartdon">
                    <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} styles={buildStyles({pathColor: 'orange', textColor: 'orange'})}/>
                </div>
                <div className="countContainedon">  {/* Added count container */}
                    {`Cantidad: ${InactiveUsersCount}`}
                </div>
            </div>
        </div>
    )
}

export default FeaturedInactive
