import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { format, parseISO } from 'date-fns';

const ListPintasBancos = () => {
    const { id } = useParams();
    const [recentDonations, setRecentDonations] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/BancoSangre/${id}`);
                const bancoSangre = response.data.body;
                const response2 = await axios.get(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/BancoSangre/Nombre/${bancoSangre.Nombre_BancoSangre}`);
                const pintas = response2.data.body;
                
                // Filter pintas to only include those with Estado_Pinta of "Vigente"
                const validPintas = pintas.filter(pinta => pinta.Estado_Pinta === 'Vigente');

                validPintas.sort((a, b) => {
                    return new Date(b.FechaDonacion_Pinta) - new Date(a.FechaDonacion_Pinta);
                });
                setRecentDonations(validPintas);
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
                        <TableCell className="tableHead">ID</TableCell>
                        <TableCell className="tableHead">Donante</TableCell>
                        <TableCell className="tableHead">Tipo de Sangre</TableCell>
                        <TableCell className="tableHead">Fecha de Donación</TableCell>
                        <TableCell className="tableHead">Estado de la Pinta</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {recentDonations.map((donation) => (
                        <TableRow key={donation.ID_BancoYPinta}>
                            <TableCell className="tableCell">{donation.ID_BancoYPinta}</TableCell>
                            <TableCell className="tableCell">{donation.Nombre_Apellido_Pinta}</TableCell>
                            <TableCell className="tableCell">{donation.Tipo_Pinta}</TableCell>
                            <TableCell className="tableCell">{donation.FechaDonacion_Pinta}</TableCell>
                            <TableCell className="tableCell">{donation.Estado_Pinta}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ListPintasBancos
