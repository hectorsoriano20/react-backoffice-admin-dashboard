import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatablePintas from "../../components/datatable/Datatable.pintas"
import FeaturedABN from '../../components/featured/pintas.vigentes/CPB.ABN';
import FeaturedABP from '../../components/featured/pintas.vigentes/CPB.ABP';
import FeaturedAN from '../../components/featured/pintas.vigentes/CPB.AN';
import FeaturedAP from '../../components/featured/pintas.vigentes/CPB.AP';
import FeaturedBN from '../../components/featured/pintas.vigentes/CPB.BN';
import FeaturedBP from '../../components/featured/pintas.vigentes/CPB.BP';
import FeaturedON from '../../components/featured/pintas.vigentes/CPB.ON';
import FeaturedOP from '../../components/featured/pintas.vigentes/CPB.OP';
import FeaturedABNEntregada from '../../components/featured/pintas.entregadas/CPB.ABN.entregada';
import FeaturedABPEntregada from '../../components/featured/pintas.entregadas/CPB.ABP.entregada';
import FeaturedANEntregada from '../../components/featured/pintas.entregadas/CPB.AN.entregada';
import FeaturedAPEntregada from '../../components/featured/pintas.entregadas/CPB.AP.entregada';
import FeaturedBNEntregada from '../../components/featured/pintas.entregadas/CPB.BN.entregada';
import FeaturedBPEntregada from '../../components/featured/pintas.entregadas/CPB.BP.entregada';
import FeaturedONEntregada from '../../components/featured/pintas.entregadas/CPB.ON.entregada';
import FeaturedOPEntregada from '../../components/featured/pintas.entregadas/CPB.OP.entregada';
import FeaturedABPCaducada from '../../components/featured/pintas.caducadas/CPB.ABP.caducada';
import FeaturedABNCaducada from '../../components/featured/pintas.caducadas/CPB.ABN.caducada';
import FeaturedANCaducada from '../../components/featured/pintas.caducadas/CPB.AN.caducada';
import FeaturedAPCaducada from '../../components/featured/pintas.caducadas/CPB.AP.caducada';
import FeaturedBNCaducada from '../../components/featured/pintas.caducadas/CPB.BN.caducada';
import FeaturedBPCaducada from '../../components/featured/pintas.caducadas/CPB.BP.caducada';
import FeaturedONCaducada from '../../components/featured/pintas.caducadas/CPB.ON.caducada';
import FeaturedOPCaducada from '../../components/featured/pintas.caducadas/CPB.OP.caducada';
import FeaturedOPTotal from '../../components/featured/pintas.total/Graph.OP';
import FeaturedONTotal from '../../components/featured/pintas.total/Graph.ON';
import FeaturedAPTotal from '../../components/featured/pintas.total/Graph.AP';
import FeaturedANTotal from '../../components/featured/pintas.total/Graph.AN';
import FeaturedBPTotal from '../../components/featured/pintas.total/Graph.BP';
import FeaturedBNTotal from '../../components/featured/pintas.total/Graph.BN';
import FeaturedABPTotal from '../../components/featured/pintas.total/Graph.ABP';
import FeaturedABNTotal from '../../components/featured/pintas.total/Graph.ABN';

const useStyles = makeStyles({
    redirectIcon: {
      color: '#a82b1e',
      textDecoration: 'none',
      fontSize: '2em',
    },
  });

const PintasList = () => {
    const [openPintas, setOpenPintas] = useState(false);  
    const [openPintasEntregadas, setOpenPintasEntregadas] = useState(false);
    const [openPintasCaducadas, setOpenPintasCaducadas] = useState(false);
    const [openPintasTotales, setOpenPintasTotales] = useState(true);
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
                <div className="titleContainer" onClick={() => setOpenPintasTotales(!openPintasTotales)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>INFORMACIÓN GENERAL</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openPintasTotales} timeout="auto" unmountOnExit>
                    <div className="pintas1">
                        <FeaturedABPTotal/>
                        <FeaturedABNTotal/>
                        <FeaturedAPTotal/>
                        <FeaturedANTotal/>
                    </div>
                    <div className="pintas2">
                        <FeaturedBPTotal/>
                        <FeaturedBNTotal/>
                        <FeaturedOPTotal/>
                        <FeaturedONTotal/>
                    </div>
                </Collapse>
                <div className="titleContainer" onClick={() => setOpenPintas(!openPintas)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>PINTAS DISPONIBLES</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openPintas} timeout="auto" unmountOnExit>
                    <div className="pintas1">
                        <FeaturedABP/>
                        <FeaturedABN/>
                        <FeaturedAP/>
                        <FeaturedAN/>
                    </div>
                    <div className="pintas2">
                        <FeaturedBP/>
                        <FeaturedBN/>
                        <FeaturedOP/>
                        <FeaturedON/>
                    </div>
                </Collapse>
                <div className="titleContainer" onClick={() => setOpenPintasEntregadas(!openPintasEntregadas)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>PINTAS ENTREGADAS</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openPintasEntregadas} timeout="auto" unmountOnExit>
                    <div className="pintas1">
                        <FeaturedABPEntregada/>
                        <FeaturedABNEntregada/>
                        <FeaturedAPEntregada/>
                        <FeaturedANEntregada/>
                    </div>
                    <div className="pintas2">
                        <FeaturedBPEntregada/>
                        <FeaturedBNEntregada/>
                        <FeaturedOPEntregada/>
                        <FeaturedONEntregada/>
                    </div>
                </Collapse>
                <div className="titleContainer" onClick={() => setOpenPintasCaducadas(!openPintasCaducadas)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>PINTAS CADUCADAS</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openPintasCaducadas} timeout="auto" unmountOnExit>
                    <div className="pintas1">
                        <FeaturedABPCaducada/>
                        <FeaturedABNCaducada/>
                        <FeaturedAPCaducada/>
                        <FeaturedANCaducada/>
                    </div>
                    <div className="pintas2">
                        <FeaturedBPCaducada/>
                        <FeaturedBNCaducada/>
                        <FeaturedOPCaducada/>
                        <FeaturedONCaducada/>
                    </div>
                </Collapse>
                <div className="titleContainer" onClick={() => setOpenListado(!openListado)} style={{width: '100%', cursor: 'pointer'}}>
                    <h2>LISTADO DE PINTAS</h2>
                    <ExpandMoreIcon />
                </div>
                <Collapse in={openListado} timeout="auto" unmountOnExit>
                    <div className="datatable">
                        <DatatablePintas/>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default PintasList