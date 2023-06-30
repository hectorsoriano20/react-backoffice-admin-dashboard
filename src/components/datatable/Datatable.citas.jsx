import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
import { citaColumns } from "../../datatablesource";
import { useState, useEffect } from 'react'
import axios from 'axios';

const DatatableCitas = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Cita')
            const transformedData = result.data.body.map(persona => ({
                id: persona.ID_Cita,
                cedula: persona.Cedula_Cita,
                nombre: persona.Nombre_Cita,
                email: persona.Correo,
                sangrecita: persona.Tipo_Sangre_Cita,
                fecha: persona.Fecha_Cita ? persona.Fecha_Cita.split("T")[0] : '',
                hora: persona.Hora_Cita,
                estado: persona.Estado_Cita,
            }))
            setData(transformedData)
        }
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este registro?')) {
            try {
                await axios.delete(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Cita/DEL/${id}`);
                setData(data.filter((item)=> item.id !== id));
            } catch (error) {
                console.error("Error deleting data: ", error);
            }
        }
    }
    
    const actionColumn = [{field: "action", headerName: "Acción", width: 200, renderCell:(params)=>{
        return (
            <div className="cellAction">
                <Link to={`/citas/${params.row.id}`} style={{ textDecoration: "none" }}>
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
              
              <Link to="/citas/new" className="link">
                Agregar Nueva Cita
              </Link>
            </div>
            <DataGrid
                rows={data}
                columns={citaColumns.concat(actionColumn)}
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

export default DatatableCitas
