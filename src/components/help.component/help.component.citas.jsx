import React from 'react';
import "./help.component.scss"
import SidebarAyuda from '../sidebar.ayuda/Sidebar.ayuda';
import NavbarAyuda from '../navbar.ayuda/Navbar.ayuda';
import YouTube from 'react-youtube';

const CitasHelp = () => {
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
                <h1>INFORMACIÓN SOBRE LAS SOLICITUDES DE DONACIÓN</h1>
                <p>Al ingresar al módulo, presenta varios gráficos indicando con porcentajes y cantidades, según el estado, las solicitudes de <strong> donación de pintas de sangre</strong> que se encuentran registrados. Adicionalmente, permite desplegar el listado de <strong>citas</strong>.</p>

                <h2>Agregar Nueva Cita</h2>
                <p>Al desplegar el listado, permite seleccionar la opción <strong>“Agregar Nueva Cita”</strong> donde muestra una pantalla con el formulario de registro, donde se toman los datos de la <strong>cita</strong>.</p>
                

                <h2>Manejar las opciones de la tabla</h2>
                <p>Cada registro tiene dos opciones, <strong>“Ver Más”</strong> y <strong>“Eliminar”</strong>.</p>
                <p>-Al seleccionar la opción <strong>“Ver Más”</strong> muestra una pantalla con información relevante de la solicitud de <strong>donación</strong>.</p>
                <p>Dentro de la pantalla <strong>“Ver Más”</strong> se encuentra la opción <strong>“Editar”</strong> que permite editar la información de la <strong>solicitud de donación</strong> utilizando el formulario de registro de una solicitud de donación.</p>
                <p>-Al seleccionar la opción <strong>“Eliminar”</strong> permite eliminar el registro seleccionado. Muestra un mensaje de confirmación antes de proceder, si aceptamos, desaparece el registro.</p>

                
                <div className="video-container">
                    <h2>Video informativo</h2>
                    <YouTube videoId="Xr2OmX-HQsc" opts={videoOptions} />
                </div>
            </div>
        </div>
    )
}

export default CitasHelp
