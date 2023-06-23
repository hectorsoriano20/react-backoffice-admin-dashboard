import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatablePintas from "../../components/datatable/Datatable.pintas"
import FeaturedABP from "../../components/featured/pintas/CPB.ABP"
import FeaturedABN from "../../components/featured/pintas/CPB.ABN"
import FeaturedAP from "../../components/featured/pintas/CPB.AP"
import FeaturedAN from "../../components/featured/pintas/CPB.AN"
import FeaturedBP from "../../components/featured/pintas/CPB.BP"
import FeaturedBN from "../../components/featured/pintas/CPB.BN"
import FeaturedOP from "../../components/featured/pintas/CPB.OP"
import FeaturedON from "../../components/featured/pintas/CPB.ON"


const PintasList = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
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
                <div className="datatable">
                    <DatatablePintas/>
                </div>
            </div>
                
        </div>
    )
}

export default PintasList