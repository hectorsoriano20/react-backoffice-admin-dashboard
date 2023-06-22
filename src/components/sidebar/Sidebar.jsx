import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom"
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                
                    <span className="logo">Gestión Escarlata ADMIN</span>
                

            </div>
            <hr></hr>
            <div className="center">
                <ul>
                    <p className="tittle">PRINCIPAL</p>
                    <Link to="/" className="link">
                        <li>
                            <DashboardIcon />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    
                    <p className="tittle">ADMINISTRACION</p>
                    <Link to="/users" className="link">
                        <li>
                            <PeopleAltIcon />
                            <span>Usuarios</span>
                        </li>
                    </Link>
                    <Link to="/pintas" className="link">
                        <li>
                            <BloodtypeIcon />
                            <span>Pintas de Sangre</span>
                        </li>
                    </Link>
                    
                    <li>
                        <WaterDamageIcon />
                        <span>Bancos de Sangre</span>
                    </li>
                    <li>
                        <EventNoteIcon />
                        <span>Citas</span>
                    </li>
                    <li>
                        <PersonIcon />
                        <span>Compradores</span>
                    </li>
                    <p className="tittle">USUARIO</p>
                    <li>
                        <SettingsIcon />
                        <span>Ajustes</span>
                    </li>
                    <li>
                        <PortraitIcon />
                        <span>Perfil</span>
                    </li>
                    <li>
                        <LogoutIcon />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            {/* <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div> */}
        </div>
    )
}

export default Sidebar