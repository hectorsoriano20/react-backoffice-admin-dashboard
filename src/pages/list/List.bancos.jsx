import React from 'react';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableBancos from "../../components/datatable/Datatable.bancos"


const BancosList = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Link to="/">
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link>
                <div className="datatable">
                    <DatatableBancos/>
                </div>
            </div>
                
        </div>
    )
}

export default BancosList