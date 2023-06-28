import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import { compradoresColumns } from "../../datatablesource";
import { useState, useEffect } from 'react'
import axios from 'axios';

const DatatableCompradores = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/CompraSangre')
            const transformedData = result.data.body.map(persona => ({
                id: persona.ID_CompraSangre,
                nombre: persona.Nombre_Comprador,
                email: persona.Correo_Compra,
                telefono: persona.Telefono_Compra,
                sangrecompra: persona.Grupo_Sanguineo_Compra,
                donante: persona.Nombre_Donante,
                sangredonacion: persona.Grupo_Sanguineo_Donante,
                edad: persona.Edad_Donante,
            }))
            setData(transformedData)
        }
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este registro?')) {
            try {
                await axios.delete(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/CompraSangre/DEL/${id}`);
                setData(data.filter((item)=> item.id !== id));
            } catch (error) {
                console.error("Error deleting data: ", error);
            }
        }
    }
    
    const actionColumn = [{field: "action", headerName: "Acción", width: 200, renderCell:(params)=>{
        return (
            <div className="cellAction">
                <Link to={`/compradores/${params.row.id}`} style={{ textDecoration: "none" }}>
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
              Lista de Solicitudes de Compra
              <Link to="/compradores/new" className="link">
                Agregar Nuevo Comprador
              </Link>
            </div>
            <DataGrid
                rows={data}
                columns={compradoresColumns.concat(actionColumn)}
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

export default DatatableCompradores
