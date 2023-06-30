import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableCompradores from "../../components/datatable/Datatable.compradores"
import FeaturedAprobadaCompra from '../../components/featured/compradores.percentage/Featured.aprobada';
import FeaturedPendienteCompra from '../../components/featured/compradores.percentage/Featured.pendiente';
import FeaturedRechazadaCompra from '../../components/featured/compradores.percentage/Featured.rechazada';


const CompradoresList = () => {
    const [openCompras, setOpenCompras] = useState(true);
    const [openListado, setOpenListado] = useState(false);
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Link to="/">
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link>
                <div className="titleContainer" onClick={() => setOpenCompras(!openCompras)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>ESTADO DE SOLICITUDES DE COMPRA</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openCompras} timeout="auto" unmountOnExit>
                    <div className="user">
                        <FeaturedAprobadaCompra/>
                        <FeaturedRechazadaCompra/>
                        <FeaturedPendienteCompra/>
                    </div>
                </Collapse>
                <div className="titleContainer" onClick={() => setOpenListado(!openListado)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>LISTADO DE SOLICITUDES DE COMPRA</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openListado} timeout="auto" unmountOnExit>
                    <div className="datatable">
                        <DatatableCompradores/>
                    </div>
                </Collapse>
            </div>
                
        </div>
    )
}

export default CompradoresList