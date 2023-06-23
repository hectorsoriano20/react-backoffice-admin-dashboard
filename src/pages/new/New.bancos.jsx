import "./new.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";
import axios from "axios";

const NewBancos = ({inputs, title}) => {
    const [file, setFile] = useState("");
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/BancoSangre/POST", formData);
            console.log(response.data);
            alert('Banco agregado correctamente'); // Mensaje de éxito
            window.location.reload(); // Refrescar la página
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
