import React from 'react';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ListPintasBancos from '../../components/table/Table.pintas.bancos';

const SingleBancos = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const [numRecords, setNumRecords] = useState(null);
    const [openListado, setOpenListado] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/BancoSangre/${id}`);
                if (result.data) {
                    const persona = result.data.body;
                    const userData = {
                        id: persona.ID_BancoSangre,
                        nombre: persona.Nombre_BancoSangre,
                        direccion: persona.Ubicacion_BancoSangre,
                    };
                    setUserData(userData);

                    const records = await axios(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/BancoSangre/Nombre/${persona.Nombre_BancoSangre}`);
                    if (records.data) {
                        // Filter the records
                        const validRecords = records.data.body.filter(record => record.Estado_Pinta === 'Vigente');
                        setNumRecords(validRecords.length); // Set the number of valid records
                    }
                }
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        if (id) {
            fetchData();
        }
    }, [id]);

    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <Link to="/bancos">
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link>
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                        <Link to={`/bancos/edit/${userData.id}`} className="link">
                            Editar
                        </Link>
                        </div>
                        <h1 className="title">Información del Banco de Sangre</h1>
                        <div className="item">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1092/1092943.png?w=826&t=st=1687872990~exp=1687873590~hmac=06575d956f2e98a0d10bcb156494d989947e31c408dce9c45a15fd5bb580821d"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">
                                    {userData.nombre}
                                </h1>
                                <div className="detailItem">
                                    <span className="itemKey">Ubicación del Banco de Sangre:</span>
                                    <span className="itemValue">{userData.direccion}</span>
                                </div>
                                <div className="detailItem2">
                                    <span className="itemKey2">Cantidad de pintas disponibles:</span>
                                    <span className="itemValue2">{numRecords}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom'>
                    <div className="titleContainer" onClick={() => setOpenListado(!openListado)} style={{width: '100%', cursor: 'pointer'}}>
                        <h2>LISTADO DE PINTAS DISPONIBLES</h2>
                        <ExpandMoreIcon />
                    </div>
                    <Collapse in={openListado} timeout="auto" unmountOnExit>
                        <div className="datatable">
                            <ListPintasBancos/>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    );
};

export default SingleBancos;
