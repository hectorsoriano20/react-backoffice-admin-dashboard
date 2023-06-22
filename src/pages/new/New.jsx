import "./new.scss"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import { useState } from "react";

const New = ({inputs, title}) => {
    
    const[file, setFile] = useState("")
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
                        <img src={file ? URL.createObjectURL(file) : "https://cdn-icons-png.flaticon.com/512/813/813789.png?w=826&t=st=1687282994~exp=1687283594~hmac=a11debd3fc0ac663321724e3d81525b5b167827d16e54d6386e80514f4317764"} alt="" />
                    </div>
                    <div className="right">
                        <form>
                        <div className="formInput">
                                <label htmlFor="file">
                                    Imagen:<DriveFolderUploadOutlinedIcon className="icon"/>
                                </label>
                                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display: "none"}}/>
                            </div>

                            {inputs.map((input) => (
                                <div className="formInput" key={input.id}>
                                <label>{input.label}</label>
                                <input type={input.type} placeholder={input.placeholder}/>
                            </div>
                            ))}
                            
                            
                            <button>Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New