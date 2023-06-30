import React from 'react';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


const SingleCitas = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Cita/${id}`);
                if (result.data) {
                    const persona = result.data.body;  // Aquí cambiamos para acceder directamente al 'body'
                    const userData = {
                        id: persona.ID_Cita,
                        cedula: persona.Cedula_Cita,
                        nombre: persona.Nombre_Cita,
                        email: persona.Correo,
                        sangrecita: persona.Tipo_Sangre_Cita,
                        fecha: persona.Fecha_Cita ? persona.Fecha_Cita.split("T")[0] : '',
                        hora: persona.Hora_Cita,
                        estado: persona.Estado_Cita,
                    };
                    setUserData(userData);
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
                <Link to="/citas">
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link>
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                        <Link to={`/citas/edit/${userData.id}`} className="link">
                            Editar
                        </Link>
                        </div>
                        <h1 className="title">Información de la Cita</h1>
                        <div className="item">
                            <img
                                src="https://img.freepik.com/premium-vector/desk-black-calendar-icon-work-deadline-symbol_572038-94.jpg?w=826"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                {/* <h1 className="itemTitle">
                                    {userData.nombre}
                                </h1> */}
                                <div className="detailItem">
                                    <span className="itemKey">Cedula:</span>
                                    <span className="itemValue">{userData.cedula}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Solicitante:</span>
                                    <span className="itemValue">{userData.nombre}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Correo asociado:</span>
                                    <span className="itemValue">{userData.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Sangre a Donar:</span>
                                    <span className="itemValue">{userData.sangrecita}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Fecha Cita:</span>
                                    <span className="itemValue">{userData.fecha}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Hora Cita:</span>
                                    <span className="itemValue">{userData.hora}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Estado:</span>
                                    <span className="itemValue">{userData.estado}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="right">
                        <Chart title="Pintas Donadas" />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default SingleCitas;
