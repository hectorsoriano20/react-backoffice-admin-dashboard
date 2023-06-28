import React from 'react';
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./help.scss"
import SidebarAyuda from '../../components/sidebar.ayuda/Sidebar.ayuda';
import NavbarAyuda from '../../components/navbar.ayuda/Navbar.ayuda';
import DatatableUsers from "../../components/datatable/Datatable.users"

const Help = () => {
    return (
        <div className="list">
            <SidebarAyuda/>
            <div className="listContainer">
                <NavbarAyuda/>
                {/* <Link to="/">
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link> */}
            </div>
                
        </div>
    )
}

export default Help