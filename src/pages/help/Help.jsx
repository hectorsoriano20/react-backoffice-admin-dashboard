import React from 'react';
import "./help.scss"
import SidebarAyuda from '../../components/sidebar.ayuda/Sidebar.ayuda';

const Help = () => {
    return (
        <div className="list">
            <SidebarAyuda/>
            <div className="listContainer">
                {/* <NavbarAyuda/> */}
                {/* <Link to="/">
                    <KeyboardBackspaceIcon className="redirectIcon"/>
                </Link> */}
            </div>
                
        </div>
    )
}

export default Help