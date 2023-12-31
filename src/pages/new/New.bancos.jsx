import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./new.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import { useState } from "react";
import axios from "axios";

const NewBancos = ({inputs, title}) => {
    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/BancoSangre/POST", formData);
            console.log(response.data);
            alert('Banco agregado correctamente'); // Mensaje de éxito
            navigate(`/bancos`);
        } catch (err) {
            console.log(err);
            alert('Hubo un error al agregar el banco. Por favor, inténtalo de nuevo.'); // Mensaje de error
        }
    }

    return (
        <div className='new'>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <Link to="/bancos">
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://cdn-icons-png.flaticon.com/512/1092/1092943.png?w=826&t=st=1687872990~exp=1687873590~hmac=06575d956f2e98a0d10bcb156494d989947e31c408dce9c45a15fd5bb580821d"} alt="" />
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

export default NewBancos
