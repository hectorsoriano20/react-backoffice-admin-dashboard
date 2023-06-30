import "./CPB.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import { useEffect, useState } from 'react';

const FeaturedOPEntregada = () => {
    const [percentage, setPercentage] = useState(0);
    const [entregadasCount, setentregadasCount] = useState(0);

    useEffect(() => {
        const fetchBloodTypeData = async () => {
            const totalResponse = await fetch('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta');
            const typeResponse = await fetch('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/Tipo/O+');
            
            const totalData = await totalResponse.json();
            const typeData = await typeResponse.json();

            // Asumimos que los datos vienen en el campo body y que este es un array.
            const totalPints = totalData.body.filter(pinta => pinta.Estado_Pinta === "Entregada").length;

            // Filtra los registros para solo incluir aquellos que tienen "Estado_Pinta" como "Vigente"
            const entregadas = typeData.body.filter(pinta => pinta.Estado_Pinta === "Entregada");
            
            const percentage = (entregadas.length / totalPints) * 100;

            setPercentage(percentage);
            setentregadasCount(entregadas.length);
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
                    <CircularProgressbar value={percentage} text={`${percentage.toFixed(2)}%`} strokeWidth={5} styles={buildStyles({pathColor: '#0f3e8d', textColor: '#0f3e8d'})}/>
                </div>
                <div className="countContainer">
                    <span>Cantidad: {entregadasCount}</span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedOPEntregada