import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./edit.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const EditPintas = ({inputs, title}) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [bancos, setBancos] = useState([]);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

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

    useEffect(() => {
        const fetchPinta = async () => {
            try {
                const response = await axios.get(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/${id}`);
                setFormData(response.data.body);
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                alert('Hubo un error al cargar la pinta. Por favor, inténtalo de nuevo.');
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
            const response = await axios.put(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/PUT/${id}`, formData);
            console.log(response.data);
            alert('Pinta editada correctamente'); 
            navigate(`/pintas/${id}`);
        } catch (err) {
            console.log(err);
            setIsLoading(false);
            alert('Hubo un error al editar la pinta. Por favor, inténtalo de nuevo.');
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
                <Link to={`/pintas/${id}`}>
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
                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                    <label>{input.label}</label>
                                    {input.name === "Nombre_BancoSangre" ? (
                                        <select name={input.name} onChange={handleChange}>
                                            <option value="">Seleccione...</option> {/* Add an empty option */}
                                            {bancos.map((banco, index) => (
                                                <option key={index} value={banco}>
                                                    {banco}
                                                </option>
                                            ))}
                                        </select>
                                    ) : input.type === "select" ? (
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

export default EditPintas
