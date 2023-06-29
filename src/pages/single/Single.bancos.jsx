import React from 'react';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ListPintasBancos from '../../components/table/Table.pintas.bancos';

const SingleBancos = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const [numRecords, setNumRecords] = useState(null);

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
                        <h1 className="title">Información</h1>
                        <div className="item">
                            <img
                                src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">
                                    {userData.nombre}
                                </h1>
                                <div className="detailItem">
                                    <span className="itemKey">Ubicacion del Banco de Sangre:</span>
                                    <span className="itemValue">{userData.direccion}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Cantidad de pintas disponibles:</span>
                                    <span className="itemValue">{numRecords}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ListPintasBancos/>
            </div>
        </div>
    );
};

export default SingleBancos;
