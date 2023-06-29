import "./CPB.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { useEffect, useState } from 'react';

const FeaturedBP = () => {
    const [percentage, setPercentage] = useState(0);
    const [vigentesCount, setVigentesCount] = useState(0);

    useEffect(() => {
        const fetchBloodTypeData = async () => {
            const totalResponse = await fetch('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta');
            const typeResponse = await fetch('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/Tipo/B+');
            
            const totalData = await totalResponse.json();
            const typeData = await typeResponse.json();

            // Asumimos que los datos vienen en el campo body y que este es un array.
            const totalPints = totalData.body.length;

            // Filtra los registros para solo incluir aquellos que tienen "Estado_Pinta" como "Vigente"
            const vigentes = typeData.body.filter(pinta => pinta.Estado_Pinta === "Vigente");
            
            const percentage = (vigentes.length / totalPints) * 100;

            setPercentage(percentage);
            setVigentesCount(vigentes.length);
        }

        fetchBloodTypeData();
    }, []);

    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">B+</h1>
            </div>
            <div className="bottom">
                <div className="featuredChart">
                    <CircularProgressbar value={percentage} text={`${percentage.toFixed(2)}%`} strokeWidth={5} styles={buildStyles({pathColor: '#8e2638', textColor: '#8e2638'})}/>
                </div>
                <div className="countContainer">
                    <span>Cantidad: {vigentesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedBP