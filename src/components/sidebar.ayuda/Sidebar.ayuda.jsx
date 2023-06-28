import "./sidebar.ayuda.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PersonIcon from '@mui/icons-material/Person';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import PortraitIcon from '@mui/icons-material/Portrait';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from "react-router-dom"
const SidebarAyuda = () => {
    const { logout } = useContext(AuthContext);

    return (
        <div className='sidebarayuda'>
            <div className="topayuda">   
                <span className="logoayuda">AYUDA</span>
            </div>
            <hr></hr>
            <div className="centerayuda">
                <ul>
                    {/* <p className="tittleayuda">PRINCIPAL</p>
                    <Link to="/ayuda/dashboard" className="linkayuda">
                        <li>
                            <DashboardIcon />
                            <span>Dashboard</span>
                        </li>
                    </Link> */}
                    
                    <p className="tittleayuda">ADMINISTRACION</p>
                    <Link to="/ayuda/users" className="linkayuda">
                        <li>
                            <PeopleAltIcon />
                            <span>Usuarios</span>
                        </li>
                    </Link>
                    <Link to="/ayuda/pintas" className="linkayuda">
                        <li>
                            <BloodtypeIcon />
                            <span>Pintas de Sangre</span>
                        </li>
                    </Link>
                    <Link to="/ayuda/bancos" className="linkayuda">
                        <li>
                            <WaterDamageIcon />
                            <span>Bancos de Sangre</span>
                        </li>
                    </Link>
                    
                    <Link to="/ayuda/citas" className="linkayuda">
                        <li>
                            <EventNoteIcon />
                            <span>Solicitudes de Donación</span>
                        </li>
                    </Link>
                    <Link to="/ayuda/compradores" className="linkayuda">
                        <li>
                            <PersonIcon />
                            <span>Solicitudes de Compra</span>
                        </li>
                    </Link>
                    
                    <p className="tittleayuda">USUARIO</p>

                    {/* <li>
                        <SettingsIcon />
                        <span>Ajustes</span>
                    </li> */}

                    {/* <li>
                        <PortraitIcon />
                        <span>Perfil</span>
                    </li> */}
                    {/* <Link to="/login" className="link" onClick={logout}>
                        <li>
                            <LogoutIcon />
                            <span>Logout</span>
                        </li>
                    </Link> */}
                    <Link to="/" className="linkayuda">
                        <li>
                            <ArrowBackIosIcon />
                            <span>Volver</span>
                        </li>
                    </Link>

                </ul>
            </div>
            {/* <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div> */}
        </div>
    )
}

export default SidebarAyuda