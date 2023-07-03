import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import axios from 'axios';

const APIMaps = () => {
    const [bancos, setBancos] = useState([]);
    const [selectedBanco, setSelectedBanco] = useState(null);
  
    const GOOGLE_MAPS_API_KEY = 'AIzaSyApGZxZB5TdxyHo32kfgU18HtgKsrpQ2ik';
  
    const mapCenter = {
        lat: 18.481982,
        lng: -69.952179
    };

    useEffect(() => {
        const fetchBancosData = async () => {
            const res = await axios.get('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/BancoSangre');
            const bancosDataPromises = res.data.body.map(async (banco) => {
                const detailsRes = await axios.get(`https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/BancoSangre/Nombre/${banco.Nombre_BancoSangre}`);
                const availableBlood = detailsRes.data.body.filter(banco => banco.Estado_Pinta === 'Vigente').length;  // Filter and count available blood
                return {
                    nombre: banco.Nombre_BancoSangre,
                    location: { lat: parseFloat(banco.Latitud_BancoSangre), lng: parseFloat(banco.Longitud_BancoSangre) },
                    details: availableBlood, // Store the count of available blood
                };
            });
            const bancosData = await Promise.all(bancosDataPromises);
            setBancos(bancosData);
        };
        fetchBancosData();
    }, []);

    const bloodBankIcon = {
        url: 'data:image/svg+xml;utf-8,<svg xmlns=\'http://www.w3.org/2000/svg\' enable-background=\'new 0 0 24 24\' height=\'24px\' viewBox=\'0 0 24 24\' width=\'24px\' fill=\'%23000000\'><rect fill=\'none\' height=\'24\' width=\'24\'/><path d=\'M12,3L2,12h3v8h14v-8h3L12,3z M12,16c-1.1,0-2-0.9-2-2c0-1.1,2-4,2-4s2,2.9,2,4C14,15.1,13.1,16,12,16z\'/></svg>',
        scaledSize: new window.google.maps.Size(30, 30),  // You can adjust the size as needed.
    };

    return (
        <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                center={mapCenter}
                zoom={13}
                mapContainerStyle={{ width: '100%', height: '620px' }}
            >
                {bancos.map((banco) => (
                    <Marker 
                        icon={bloodBankIcon}
                        key={banco.nombre}
                        position={banco.location}
                        onClick={() => {
                            setSelectedBanco(banco);
                        }}
                    />
                ))}
                {selectedBanco && (
                    <InfoWindow
                        position={selectedBanco.location}
                        onCloseClick={() => {
                            setSelectedBanco(null);
                        }}
                    >
                        <div>
                            <h2>{selectedBanco.nombre}</h2>
                            <p>{`Pintas de sangre disponibles: ${selectedBanco.details}`}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default APIMaps;
