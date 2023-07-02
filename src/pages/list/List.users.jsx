import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableUsers from "../../components/datatable/Datatable.users"
import FeaturedActive from '../../components/featured/users.percentage/Featured.active';
import FeaturedInactive from '../../components/featured/users.percentage/Featured.inactive';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    redirectIcon: {
      color: '#a82b1e',
      textDecoration: 'none',
      fontSize: '2em',
    },
  });

const UserList = () => {
    const [openUsuarios, setOpenUsuarios] = useState(true);
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
                <div className="titleContainer" onClick={() => setOpenUsuarios(!openUsuarios)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>ESTADO DE USUARIOS</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openUsuarios} timeout="auto" unmountOnExit>
                    <div className="user">
                        <FeaturedActive/>
                        <FeaturedInactive/>
                    </div>
                </Collapse>
                <div className="titleContainer" onClick={() => setOpenListado(!openListado)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>LISTADO DE USUARIOS</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openListado} timeout="auto" unmountOnExit>
                    <div className="datatable">
                        <DatatableUsers/>
                    </div>
                </Collapse>
                
            </div>
                
        </div>
    )
}

export default UserList