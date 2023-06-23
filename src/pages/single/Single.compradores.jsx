import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleCompradores = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/CompraSangre/${id}`);
                if (result.data) {
                    const persona = result.data.body;  // Aquí cambiamos para acceder directamente al 'body'
                    const userData = {
                        id: persona.ID_CompraSangre,
                        nombre: persona.Nombre_Comprador,
                        email: persona.Correo_Compra,
                        telefono: persona.Telefono_Compra,
                        sangrecompra: persona.Grupo_Sanguineo_Compra,
                        donante: persona.Nombre_Donante,
                        sangredonacion: persona.Grupo_Sanguineo_Donante,
                        edad: persona.Edad_Donante,
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
                        <div className="editButton">
                        <Link to={`/compradores/edit/${userData.id}`} className="link">
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
                                {/* <h1 className="itemTitle">
                                    {userData.nombre}
                                </h1> */}
                                <div className="detailItem">
                                    <span className="itemKey">Nombre y Apellido del Comprador:</span>
                                    <span className="itemValue">{userData.nombre}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Correo Electrónico:</span>
                                    <span className="itemValue">{userData.email}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Teléfono:</span>
                                    <span className="itemValue">{userData.telefono}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Tipo de Sangre solicitada a Comprar:</span>
                                    <span className="itemValue">{userData.sangrecompra}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Nombre del donante:</span>
                                    <span className="itemValue">{userData.donante}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Tipo de Sangre a Donar:</span>
                                    <span className="itemValue">{userData.sangredonacion}</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Edad del donante:</span>
                                    <span className="itemValue">{userData.edad}</span>
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

export default SingleCompradores;
