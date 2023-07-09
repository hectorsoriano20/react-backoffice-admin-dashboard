import { Pie } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import "./Graph.total.scss"

const FeaturedONTotal = () => {
    const [pintaData, setPintaData] = useState({
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: [],
            hoverBackgroundColor: []
        }]
    });

    useEffect(() => {
        let isMounted = true; // variable de montaje

        const fetchBloodTypeData = async () => {
            const response = await fetch('https://nodejs-sequelize-restapi-mssql-production.up.railway.app/api/v1/Pinta/Tipo/O-');
            const data = await response.json();

            // Asumimos que los datos vienen en el campo body y que este es un array.
            const vigentes = data.body.filter(pinta => pinta.Estado_Pinta === "Vigente").length;
            const entregadas = data.body.filter(pinta => pinta.Estado_Pinta === "Entregada").length;
            const caducadas = data.body.filter(pinta => pinta.Estado_Pinta === "Caducada").length;

            if (isMounted) { // solo actualiza el estado si el componente está montado
                setPintaData({
                    labels: ['Disponible', 'Entregada', 'Caducada'],
                    datasets: [{
                        data: [vigentes, entregadas, caducadas],
                        backgroundColor: ['green', '#0f3e8d', 'red'],
                        hoverBackgroundColor: ['green', '#0f3e8d', 'red']
                    }]
                });
            }
        }

        fetchBloodTypeData();

        return () => {
            isMounted = false; // limpia al desmontar
        };
    }, []);

    return (
        <div className="featuredTOTAL">
            <div className="topTOTAL">
                <h1 className="titleTOTAL">O-</h1>
            </div>
            <div className="bottomTOTAL">
                <div className="featuredChartTOTAL">
                    <Pie
                        data={pintaData}
                        options={{
                            responsive: true,
                            plugins: {
                                tooltip: {
                                    callbacks: {
                                        label: function (context) {
                                            var dataset = context.dataset.data;
                                            var total = dataset.reduce(function (previousValue, currentValue, currentIndex, array) {
                                                return previousValue + currentValue;
                                            });
                                            var currentValue = dataset[context.dataIndex];
                                            var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                                            return context.label + ': ' + percentage + '%' + ' (' + currentValue + ')';
                                        }
                                    }
                                }
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default FeaturedONTotal;
