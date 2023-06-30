import "./home.scss"
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Home = () => {
    const [openListado, setOpenListado] = useState(false);

    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widget type="user"/>
                    <Widget type="pinta"/>
                    <Widget type="cita"/>
                    <Widget type="comprador"/>
                </div>
                <div className="charts">
                    <Chart title="Total Pintas Donadas"/>
                </div>
                <div className="listContainer">
                    <div className="titleContainer" onClick={() => setOpenListado(!openListado)} style={{width: '100%', cursor: 'pointer'}}>
                        <h2>DONACIONES MAS RECIENTES</h2>
                        <ExpandMoreIcon />
                    </div>
                    <Collapse in={openListado} timeout="auto" unmountOnExit>
                        <div className="datatable">
                            <List/>
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default Home