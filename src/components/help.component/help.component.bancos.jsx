import React from 'react';
import "./help.component.scss"
import SidebarAyuda from '../sidebar.ayuda/Sidebar.ayuda';
import NavbarAyuda from '../navbar.ayuda/Navbar.ayuda';
import YouTube from 'react-youtube';

const BancosHelp = () => {
    const videoOptions = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
        },
    };

    return (
        <div className="list">
            <SidebarAyuda/>
            <div className="listContainer help-container">
                <h2>Ver listado de bancos de sangre</h2>
                <p>Al ingresar al módulo, presenta la lista de <strong>bancos de sangre</strong> que se encuentran registrados en el sistema.</p>

                <h2>Manejar las opciones de la tabla</h2>
                <p>Cada registro tiene dos opciones, <strong>“Ver Más”</strong> y <strong>“Eliminar”</strong>.</p>
                <p>-Al seleccionar la opción <strong>“Ver Más”</strong> muestra la siguiente pantalla con información relevante del banco de sangre, incluyendo la cantidad de pintas <strong>disponibles</strong> del banco en cuestión. Adicional, muestra el listado de las pintas de sangre <strong>disponibles</strong>. </p>
                <p>Dentro de la pantalla <strong>“Ver Más”</strong> se encuentra la opción <strong>“Editar”</strong> que permite editar la información del banco de sangre utilizando el formulario de registro y actualizar la base de datos.</p>
                <p>-Al seleccionar la opción <strong>“Eliminar”</strong> muestra un mensaje de confirmación antes de eliminar el registro y luego de aceptar, desaparece el mismo.</p>

                <h2>Agregar Nuevo Banco</h2>
                <p>Al seleccionar la opción <strong>“Agregar Nuevo Banco”</strong> muestra una pantalla con el formulario de registro, donde se toman los datos del banco de sangre para luego enviar a nuestro registro.</p>
                
                <div className="video-container">
                    <h2>Video informativo</h2>
                    <YouTube videoId="Sb-lxIMs0Xk" opts={videoOptions} />
                </div>
            </div>
        </div>
    )
}

export default BancosHelp
