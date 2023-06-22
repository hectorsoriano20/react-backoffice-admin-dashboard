import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useState, useEffect } from 'react'
import axios from 'axios';

const Widget = ( {type} ) => {
    let data = {
        title: "Default",
        isMoney: false,
        link: "Default link",
        icon: null
    };

    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if(type === "user"){
            const fetchData = async () => {
                const result = await axios('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona');
                setAmount(result.data.body.length);
            }
            fetchData();
        }
    }, [type]);

    useEffect(() => {
        if(type === "pinta"){
            const fetchData = async () => {
                const result = await axios('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta');
                setAmount(result.data.body.length);
            }
            fetchData();
        }
    }, [type]);

    useEffect(() => {
        if(type === "comprador"){
            const fetchData = async () => {
                const result = await axios('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/CompraSangre');
                setAmount(result.data.body.length);
            }
            fetchData();
        }
    }, [type]);

    const diff = 20 // Temporal

    switch(type){
        case "user":
            data={
                title: "TOTAL DE USUARIOS",
                isMoney: false,
                link: "Mostrar todos los usuarios",
                icon: <PeopleAltIcon className="icon"/>,
            };
            break;
        case "pinta":
            data={
                title: "PINTAS DE SANGRE",
                isMoney: false,
                link: "Mostrar pintas disponibles",
                icon: <BloodtypeIcon className="icon"/>,
            };
            break;    
        case "cita":
            data={
                title: "CITAS",
                isMoney: false,
                link: "Mostrar todas las citas",
                icon: <EventNoteIcon className="icon"/>,
            };
            break;        
        case "comprador":
            data={
                title: "COMPRADORES",
                isMoney: false,
                link: "Mostrar todos los compradores",
                icon: <PersonOutlineOutlinedIcon className="icon"/>,
            };
            break;    
        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && "$"}{amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                {/* <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    {diff} %
                </div> */}
                {data.icon}
            </div>
        </div>
    )
}

export default Widget
