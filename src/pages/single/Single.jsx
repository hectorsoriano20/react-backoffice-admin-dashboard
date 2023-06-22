import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Single = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});

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
                        edad: persona.Edad_Persona,
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
                <div className="top">
                    <div className="left">
                        <div className="editButton">Editar</div>
                        <h1 className="title">Información</h1>
                        <div className="item">
                            <img
                                src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                <h1 className="itemTitle">
                                    {userData.nombre} {userData.apellido}
                                </h1>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">{userData.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Teléfono:</span>
                                    <span className="itemValue">{userData.numero}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Edad:</span>
                                    <span className="itemValue">{userData.edad}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart title="Pintas Donadas" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;
