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

const List = () => {
    const [recentDonations, setRecentDonations] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta');
                const pintas = response.data.body;

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
    }, []);

    if (!recentDonations) {
        return <div>Loading...</div>;
    }

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableHead">ID</TableCell>
                        <TableCell className="tableHead">Nombre y Apellido</TableCell>
                        <TableCell className="tableHead">Correo</TableCell>
                        <TableCell className="tableHead">Tipo de Sangre</TableCell>
                        <TableCell className="tableHead">Banco de Sangre</TableCell>
                        <TableCell className="tableHead">Fecha de Donación</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {recentDonations.map((donation) => (
                        <TableRow key={donation.ID_Pinta}>
                            <TableCell className="tableCell">{donation.ID_Pinta}</TableCell>
                            <TableCell className="tableCell">{donation.Nombre_Apellido_Pinta}</TableCell>
                            <TableCell className="tableCell">{donation.Correo_Pinta}</TableCell>
                            <TableCell className="tableCell">{donation.Tipo_Pinta}</TableCell>
                            <TableCell className="tableCell">{donation.Nombre_BancoSangre}</TableCell>
                            <TableCell className="tableCell">{format(parseISO(donation.FechaDonacion_Pinta), 'yyyy-MM-dd')}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default List
