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
                <h1>Ver listado de bancos de sangre</h1>
                <p>Al ingresar al módulo, presenta la lista de <strong>bancos de sangre</strong> que se encuentran registrados en el sistema.</p>

                <h2>Agregar Nuevo Banco</h2>
                <p>Al desplegar el listado, permite seleccionar la opción <strong>“Agregar Nuevo Banco”</strong> donde muestra una pantalla con el formulario de registro, donde se toman los datos del <strong>banco de sangre</strong>.</p>

                <h2>Manejar las opciones de la tabla</h2>
                <p>Cada registro tiene dos opciones, <strong>“Ver Más”</strong> y <strong>“Eliminar”</strong>.</p>
                <p>-Al seleccionar la opción <strong>“Ver Más”</strong> muestra una pantalla con información relevante del banco de sangre, incluyendo la cantidad de pintas <strong>disponibles</strong> del banco en cuestión. Adicional, permite desplegar el listado de las pintas de sangre <strong>disponibles</strong> del banco. </p>
                <p>Dentro de la pantalla <strong>“Ver Más”</strong> se encuentra la opción <strong>“Editar”</strong> que permite editar la información del <strong>banco de sangre</strong> utilizando el formulario de registro de bancos de sangre.</p>
                <p>-Al seleccionar la opción <strong>“Eliminar”</strong> permite eliminar el registro seleccionado. Muestra un mensaje de confirmación antes de proceder, si aceptamos, desaparece el registro.</p>

                
                <div className="video-container">
                    <h2>Video informativo</h2>
                    <YouTube videoId="Sb-lxIMs0Xk" opts={videoOptions} />
                </div>
            </div>
        </div>
    )
}

export default BancosHelp
