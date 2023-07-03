import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableBancos from "../../components/datatable/Datatable.bancos"
import APIMaps from '../../components/maps/APIMaps';

const useStyles = makeStyles({
    redirectIcon: {
      color: '#a82b1e',
      textDecoration: 'none',
      fontSize: '2em',
    },
  });

const BancosList = () => {
    const [openListado, setOpenListado] = useState(false);
    const [openMaps, setOpenMaps] = useState(true);

    const classes = useStyles();
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <Link to="/">
                    <KeyboardBackspaceIcon className={classes.redirectIcon}/>
                </Link>
                <div className="titleContainer" onClick={() => setOpenMaps(!openMaps)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>MAPA BANCOS DE SANGRE</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openMaps} timeout="auto" unmountOnExit>
                    <div className="datatable">
                        <APIMaps/>
                    </div>
                </Collapse>
                <div className="titleContainer" onClick={() => setOpenListado(!openListado)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>LISTADO DE BANCOS DE SANGRE</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openListado} timeout="auto" unmountOnExit>
                    <div className="datatable">
                        <DatatableBancos/>
                    </div>
                </Collapse>
            </div>
                
        </div>
    )
}

export default BancosList