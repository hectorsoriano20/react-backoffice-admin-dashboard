import React from 'react';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableCitas from "../../components/datatable/Datatable.citas"



const CitasList = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Link to="/">
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link>
                <div className="datatable">
                    <DatatableCitas/>
                </div>
            </div>
                
        </div>
    )
}

export default CitasList