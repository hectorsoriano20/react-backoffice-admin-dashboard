import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./new.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import axios from "axios";

const NewPintas = ({inputs, title}) => {
    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({});
    const [bancos, setBancos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBancos = async () => {
            try {
                const response = await axios.get('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/BancoSangre');
                if (response.data.body && Array.isArray(response.data.body)) {
                  setBancos(response.data.body.map((banco) => banco.Nombre_BancoSangre));
                } else {
                  console.error('Error: La respuesta de la API no contiene un array en la propiedad "body"');
                }
              } catch (error) {
                console.error('Hubo un error!', error);
              }
        }
    
        fetchBancos();
    }, []);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/POST", formData);
            console.log(response.data);
            alert('Pinta agregada correctamente'); // Mensaje de éxito
            navigate(`/pintas`);
        } catch (err) {
            console.log(err);
            alert('Hubo un error al agregar la pinta. Por favor, inténtalo de nuevo.'); // Mensaje de error
        }
    }

    return (
        <div className='new'>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <Link to="/pintas">
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://cdn-icons-png.flaticon.com/512/822/822283.png?w=826&t=st=1687872525~exp=1687873125~hmac=5d68dfff5a84a8b3c39f451b15145213488aecf656133d506b2a2213304b8e39"} alt="" />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            {/* <div className="formInput">
                                <label htmlFor="file">
                                    Imagen:<DriveFolderUploadOutlinedIcon className="icon"/>
                                </label>
                                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                            </div> */}

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    {input.type === "select" && input.name === "Nombre_BancoSangre" ? (
                                        <select name={input.name} onChange={handleChange}>
                                            <option value="">Seleccionar...</option> {/* Agregar una opción vacía */}
                                            {bancos.map((banco, index) => (
                                                <option key={index} value={banco}>
                                                    {banco}
                                                </option>
                                            ))}
                                        </select>
                                    ) : input.type === "select" ? (
                                        <select name={input.name} onChange={handleChange}>
                                            {input.options.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input type={input.type} name={input.name} onChange={handleChange}/>
                                    )}
                                </div>
                            ))}
                            <button type="submit">Publicar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPintas
