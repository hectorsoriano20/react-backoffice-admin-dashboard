import React from 'react';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ChartUsers from '../../components/chart/Chart.users';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ListUsers from '../../components/table/Table.users';


const SingleUsers = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});
    const [openListado, setOpenListado] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona/${id}`);
                if (result.data) {
                    const persona = result.data.body;  // Aquí cambiamos para acceder directamente al 'body'
                    const userData = {
                        id: persona.ID_Persona,
                        nombre: persona.Nombre_Persona,
                        apellido: persona.Apellido_Persona,
                        email: persona.Correo_Persona,
                        numero: persona.Numero_Persona,
                        fechanacimiento: persona.FechaNacimiento_Persona ? persona.FechaNacimiento_Persona.split("T")[0] : '',
                        edad: persona.Edad_Persona,
                        tipo: persona.Tipo_Sangre_Persona,
                        estado: persona.Estado_Persona,
                        cedula: persona.Cedula_Persona
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
                <Link to="/users">
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link>
                <div className="top">
                    <div className="left">
                        <div className="editButton">
                            <Link to={`/users/edit/${userData.id}`} className="link">
                                Editar
                            </Link>
                        </div>
                        <h1 className="title">Ficha del Usuario</h1>
                        <div className="item">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/87/87141.png?w=826&t=st=1687871218~exp=1687871818~hmac=92d8572b4fa1fa85807654d43cfe1c0c9f04d354a424b9d3f0696333a840c837"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">
                                    {userData.nombre}
                                </h1>
                                <h1 className="itemTitle2">
                                    {userData.apellido}
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
                                    <span className="itemKey">Teléfono:</span>
                                    <span className="itemValue">{userData.numero}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Fecha de Nacimiento:</span>
                                    <span className="itemValue">{userData.fechanacimiento}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Edad:</span>
                                    <span className="itemValue">{userData.edad}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Tipo de Sangre:</span>
                                    <span className="itemValue">{userData.tipo}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Estado:</span>
                                    <span className="itemValue">{userData.estado}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <ChartUsers title="Pintas Donadas" />
                    </div>
                </div>
                <div className="titleContainer" onClick={() => setOpenListado(!openListado)} style={{width: '100%', cursor: 'pointer'}}>
                        <h2>LISTADO DE PINTAS DONADAS</h2>
                        <ExpandMoreIcon />
                    </div>
                    <Collapse in={openListado} timeout="auto" unmountOnExit>
                        <div className="datatable">
                            <ListUsers/>
                        </div>
                    </Collapse>
            </div>
        </div>
    );
};

export default SingleUsers;
