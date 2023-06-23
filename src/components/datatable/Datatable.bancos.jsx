import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import { bancoColumns } from "../../datatablesource";
import { useState, useEffect } from 'react'
import axios from 'axios';

const DatatableBancos = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/BancoSangre')
            const transformedData = result.data.body.map(persona => ({
                id: persona.ID_BancoSangre,
                nombre: persona.Nombre_BancoSangre,
                direccion: persona.Ubicacion_BancoSangre,
            }))
            setData(transformedData)
        }
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este registro?')) {
            try {
                await axios.delete(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/BancoSangre/DEL/${id}`);
                setData(data.filter((item)=> item.id !== id));
            } catch (error) {
                console.error("Error deleting data: ", error);
            }
        }
    }
    
    const actionColumn = [{field: "action", headerName: "Acción", width: 200, renderCell:(params)=>{
        return (
            <div className="cellAction">
                <Link to={`/bancos/${params.row.id}`} style={{ textDecoration: "none" }}>
                  <div className="viewButton">Ver Más</div>
                </Link>
                
                <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Eliminar</div>
            </div>
        )
    }}]
    console.log(data)
    return (
        <div className="datatable">
            <div className="datatableTitle">
              Lista de Bancos
              <Link to="/bancos/new" className="link">
                Agregar Nuevo Banco
              </Link>
            </div>
            <DataGrid
                rows={data}
                columns={bancoColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                     paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10 , 15, 20]}
        checkboxSelection
      />
        </div>
    )
}

export default DatatableBancos
