import React from 'react';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./edit.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditCompradores = ({inputs, title}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        const fetchPinta = async () => {
            try {
                const response = await axios.get(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/CompraSangre/${id}`);
                setFormData(response.data.body);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                alert('Hubo un error al cargar la solicitud de compra. Por favor, inténtalo de nuevo.');
            }
        }

        if (id) {
            fetchPinta();
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.put(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/CompraSangre/PUT/${id}`, formData);
            console.log(response.data);
            alert('Solicitud editada correctamente'); 
            navigate(`/compradores/${id}`);
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            alert('Hubo un error al editar la solicitud. Por favor, inténtalo de nuevo.');
        }
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='new'>
            <Sidebar/>
            <div className="newContainer">
                <Navbar/>
                <Link to={`/compradores/${id}`}>
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link>
                <div className="top">
                    <h1>{title}</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file) : "https://cdn-icons-png.flaticon.com/512/813/813789.png"} alt="" />
                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit}>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Imagen:<DriveFolderUploadOutlinedIcon className="icon"/>
                                </label>
                                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                            </div>

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
                                            value={formData[input.name] || ''}
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

export default EditCompradores
