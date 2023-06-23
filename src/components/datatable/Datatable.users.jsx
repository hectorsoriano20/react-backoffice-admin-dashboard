import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import { userColumns } from "../../datatablesource";
import { useState, useEffect } from 'react'
import axios from 'axios';

const DatatableUsers = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona')
            const transformedData = result.data.body.map(persona => ({
                id: persona.ID_Persona,
                nombre: persona.Nombre_Persona,
                apellido: persona.Apellido_Persona,
                email: persona.Correo_Persona,
                numero: persona.Numero_Persona,
                edad: persona.Edad_Persona,
                tipo: persona.Tipo_Sangre_Persona,
                estado: persona.Estado_Persona,
            }))
            setData(transformedData)
        }
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este registro?')) {
            try {
                await axios.delete(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona/DEL/${id}`);
                setData(data.filter((item)=> item.id !== id));
            } catch (error) {
                console.error("Error deleting data: ", error);
            }
        }
    }
    
    const actionColumn = [{field: "action", headerName: "Acción", width: 200, renderCell:(params)=>{
        return (
            <div className="cellAction">
                <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
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
              Lista de Usuarios
              <Link to="/users/new" className="link">
                Crear Nuevo Usuario
              </Link>
            </div>
            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
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

export default DatatableUsers
