import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableBancos from "../../components/datatable/Datatable.bancos"


const BancosList = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <div className="datatable">
                    <DatatableBancos/>
                </div>
            </div>
                
        </div>
    )
}

export default BancosList