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

const SinglePintas = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/${id}`);
                if (result.data) {
                    const persona = result.data.body;  // Aquí cambiamos para acceder directamente al 'body'
                    const userData = {
                        id: persona.ID_Pinta,
                        nombre: persona.Nombre_Apellido_Pinta,
                        email: persona.Correo_Pinta,
                        tipo: persona.Tipo_Pinta,
                        fecha: persona.FechaDonacion_Pinta.split("T")[0], // Divide el string por "T" y toma el primer segmento.
                        cedula: persona.Cedula_Persona,
                        banco: persona.Nombre_BancoSangre,
                        estado: persona.Estado_Pinta
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
                <Link to="/pintas">
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link>
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                        <Link to={`/pintas/edit/${userData.id}`} className="link">
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
                                    <span className="itemKey">Cedula:</span>
                                    <span className="itemValue">{userData.cedula}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{userData.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Tipo de Sangre:</span>
                                    <span className="itemValue">{userData.tipo}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Fecha Donación:</span>
                                    <span className="itemValue">{userData.fecha}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Banco de Sangre:</span>
                                    <span className="itemValue">{userData.banco}</span>
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

export default SinglePintas;
