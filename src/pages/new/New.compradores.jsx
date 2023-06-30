import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./new.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import { useState } from "react";
import axios from "axios";

const NewCompradores = ({inputs, title}) => {
    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/CompraSangre/POST", formData);
            console.log(response.data);
            alert('Solicitud de Compra agregada correctamente'); // Mensaje de éxito
            // Enviar datos al endpoint de email
            const emailData = {
                Correo_Compra: formData.Correo_Compra,
                Nombre_Comprador: formData.Nombre_Comprador,
            }
            const emailResponse = await axios.post("https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/send-compra-email", emailData);
            console.log(emailResponse.data);
            navigate(`/compradores`);
        } catch (err) {
            console.log(err);
            alert('Hubo un error al agregar la solicitud de Compra. Por favor, inténtalo de nuevo.'); // Mensaje de error
        }
    }

    return (
        <div className='new'>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <Link to="/compradores">
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://img.freepik.com/premium-vector/hand-drawn-clipboard_574890-638.jpg?w=826"} alt="" />
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
                                    {input.type === "select" ? (
                                        <select name={input.name} onChange={handleChange}>
                                            {input.options.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input 
                                            type={input.type} 
                                            placeholder={input.placeholder} 
                                            name={input.name}
                                            onChange={handleChange}
                                        />
                                    )}
                                </div>
                            ))}

                            <button type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCompradores
