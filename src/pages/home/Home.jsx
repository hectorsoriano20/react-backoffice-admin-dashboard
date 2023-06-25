import "./home.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import List from "../../components/table/Table"

const Home = () => {
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
                    <Featured/>
                    <Chart title="Total Pintas Donadas"/>
                </div>
                <div className="listContainer">
                    
                    <div className="listTitle">Donaciones más recientes</div>
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default Home