import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
            ID_CompraSangre: 14,
            Nombre_Comprador: "Alejandro",
            Correo_Compra: "prueba@correo.com",
            Telefono_Compra: 8099998888,
            Grupo_Sanguineo_Compra: "AB+"
        }
    ]
    return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">ID</TableCell>
          <TableCell className="tableCell">Nombre</TableCell>
          <TableCell className="tableCell">Correo</TableCell>
          <TableCell className="tableCell">Telefono</TableCell>
          <TableCell className="tableCell">Grupo Sanguineo</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.ID_CompraSangre}
          >
            <TableCell className="tableCell">{row.ID_CompraSangre}</TableCell>
            <TableCell className="tableCell">{row.Nombre_Comprador}</TableCell>
            <TableCell className="tableCell">{row.Correo_Compra}</TableCell>
            <TableCell className="tableCell">{row.Telefono_Compra}</TableCell>
            <TableCell className="tableCell">{row.Grupo_Sanguineo_Compra}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    )
}

export default List