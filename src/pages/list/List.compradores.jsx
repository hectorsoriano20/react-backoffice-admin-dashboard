import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableCompradores from "../../components/datatable/Datatable.compradores"



const CompradoresList = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <div className="datatable">
                    <DatatableCompradores/>
                </div>
            </div>
                
        </div>
    )
}

export default CompradoresList