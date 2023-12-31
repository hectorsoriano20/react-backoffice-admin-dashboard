import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableCitas from "../../components/datatable/Datatable.citas"
import FeaturedAprobada from '../../components/featured/citas.percentage/Featured.aprobada';
import FeaturedRechazada from '../../components/featured/citas.percentage/Featured.rechazada';
import FeaturedPendiente from '../../components/featured/citas.percentage/Featured.pendiente';

const useStyles = makeStyles({
    redirectIcon: {
      color: '#a82b1e',
      textDecoration: 'none',
      fontSize: '2em',
    },
  });

const CitasList = () => {
    const [openCitas, setOpenCitas] = useState(true);
    const [openListado, setOpenListado] = useState(false);
    const classes = useStyles();
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Link to="/">
                    <KeyboardBackspaceIcon className={classes.redirectIcon}/>
                </Link>
                <div className="titleContainer" onClick={() => setOpenCitas(!openCitas)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>ESTADO DE CITAS</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openCitas} timeout="auto" unmountOnExit>
                    <div className="user">
                        <FeaturedPendiente/>
                        <FeaturedAprobada/>
                        <FeaturedRechazada/>
                    </div>
                </Collapse>
                <div className="titleContainer" onClick={() => setOpenListado(!openListado)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>LISTADO DE CITAS</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openListado} timeout="auto" unmountOnExit>
                    <div className="datatable">
                        <DatatableCitas/>
                    </div>
                </Collapse>
            </div>
                
        </div>
    )
}

export default CitasList