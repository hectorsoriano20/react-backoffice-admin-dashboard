import "./list.users.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableUsers from "../../components/datatable/Datatable.users"

const UserList = () => {
    return (
        <div className="list">
            <Sidebar/>
            <div className="listContainer">
                <Navbar/>
                <DatatableUsers/>
            </div>
                
        </div>
    )
}

export default UserList