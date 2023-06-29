import { useParams } from "react-router-dom";
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

const ListUsers = () => {
    const { id } = useParams();
    const [recentDonations, setRecentDonations] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responsePersona = await axios.get(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Persona/${id}`);
                const cedula = responsePersona.data.body.Cedula_Persona;

                const responsePinta = await axios.get(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/Cedula/${cedula}`);
                const pintas = responsePinta.data.body;

                pintas.sort((a, b) => {
                    return new Date(b.FechaDonacion_Pinta) - new Date(a.FechaDonacion_Pinta);
                });

                const lastDonations = pintas.slice(0, 5);

                setRecentDonations(lastDonations);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, [id]);

    if (!recentDonations) {
        return <div>No hay datos para mostrar</div>;
    }

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell">ID</TableCell>
                        <TableCell className="tableCell">Tipo de Sangre</TableCell>
                        <TableCell className="tableCell">Fecha de Donación</TableCell>
                        <TableCell className="tableCell">Nombre del Banco de Sangre</TableCell>
                        <TableCell className="tableCell">Estado de la Pinta</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {recentDonations.map((donation) => (
                        <TableRow key={donation.ID_Pinta}>
                            <TableCell className="tableCell">{donation.ID_Pinta}</TableCell>
                            <TableCell className="tableCell">{donation.Tipo_Pinta}</TableCell>
                            <TableCell className="tableCell">{format(parseISO(donation.FechaDonacion_Pinta), 'yyyy-MM-dd')}</TableCell>
                            <TableCell className="tableCell">{donation.Nombre_BancoSangre}</TableCell>
                            <TableCell className="tableCell">{donation.Estado_Pinta}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ListUsers;
