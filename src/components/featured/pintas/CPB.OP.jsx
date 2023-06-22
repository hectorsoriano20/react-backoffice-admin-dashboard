import "./CPB.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { useEffect, useState } from 'react';

const FeaturedOP = () => {
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const fetchBloodTypeData = async () => {
            const totalResponse = await fetch('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta');
            const typeResponse = await fetch('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/Tipo/O+');
            
            const totalData = await totalResponse.json();
            const typeData = await typeResponse.json();

            // Asumimos que los datos vienen en el campo body y que este es un array.
            const totalPints = totalData.body.length;
            const typePints = typeData.body.length;

            const percentage = (typePints / totalPints) * 100;

            setPercentage(percentage);
        }

        fetchBloodTypeData();
    }, []);

    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">O+</h1>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={percentage} text={`${percentage.toFixed(2)}%`} strokeWidth={5} styles={buildStyles({pathColor: '#8e2638', textColor: '#8e2638'})}/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedOP