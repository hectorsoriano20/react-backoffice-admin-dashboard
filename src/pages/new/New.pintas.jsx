import React from 'react';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./new.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";
import axios from "axios";

const NewPintas = ({inputs, title}) => {
    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/POST", formData);
            console.log(response.data);
            alert('Pinta agregada correctamente'); // Mensaje de éxito
            window.location.reload(); // Refrescar la página
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

                            
                        </form>
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPintas
