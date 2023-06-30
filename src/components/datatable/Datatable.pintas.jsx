import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import { pintaColumns } from "../../datatablesource";
import { useState, useEffect } from 'react'
import axios from 'axios';

const DatatablePintas = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta')
            const transformedData = result.data.body.map(persona => ({
                id: persona.ID_Pinta,
                nombre: persona.Nombre_Apellido_Pinta,
                email: persona.Correo_Pinta,
                tipo: persona.Tipo_Pinta,
                fecha: persona.FechaDonacion_Pinta ? persona.FechaDonacion_Pinta.split("T")[0] : '',
                cedula: persona.Cedula_Persona,
                banco: persona.Nombre_BancoSangre,
                estado: persona.Estado_Pinta
            }))
            setData(transformedData)
        }
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este registro?')) {
            try {
                await axios.delete(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/DEL/${id}`);
                setData(data.filter((item)=> item.id !== id));
            } catch (error) {
                console.error("Error deleting data: ", error);
            }
        }
    }
    
    const actionColumn = [{field: "action", headerName: "Acción", width: 200, renderCell:(params)=>{
        return (
            <div className="cellAction">
                <Link to={`/pintas/${params.row.id}`} style={{ textDecoration: "none" }}>
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
              
              <Link to="/pintas/new" className="link">
                Agregar Nueva Pinta
              </Link>
            </div>
            <DataGrid
                rows={data}
                columns={pintaColumns.concat(actionColumn)}
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

export default DatatablePintas
