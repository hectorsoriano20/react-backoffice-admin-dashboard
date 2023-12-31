import React from 'react';
import "./help.component.scss"
import SidebarAyuda from '../sidebar.ayuda/Sidebar.ayuda';
import NavbarAyuda from '../navbar.ayuda/Navbar.ayuda';
import YouTube from 'react-youtube';

const PintasHelp = () => {
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
                <h1>INFORMACIÓN SOBRE LAS PINTAS</h1>
                <p>Al ingresar al módulo, presenta varios gráficos indicando con porcentajes y cantidades, según el tipo de pinta, las <strong>pintas de sangre</strong> registradas en el sistema con sus diferentes estados. Adicionalmente, permite desplegar la información, de manera individual, sobre las pintas <strong>disponibles</strong>, <strong>entregadas</strong> y <strong>caducadas</strong>. Finalmente, permite desplegar el listado actual de <strong>pintas</strong>.</p>

                <h2>Agregar Nueva Pinta</h2>
                <p>Al desplegar el listado, permite seleccionar la opción <strong>“Agregar Nueva Pinta”</strong> donde muestra una pantalla con el formulario de registro, donde se toman los datos de la <strong>donación</strong>.</p>

                <h2>Manejar las opciones de la tabla</h2>
                <p>Cada registro tiene dos opciones, <strong>“Ver Más”</strong> y <strong>“Eliminar”</strong>.</p>
                <p>-Al seleccionar la opción <strong>“Ver Más”</strong> muestra una pantalla con información de la donación.</p>
                <p>Dentro de la pantalla <strong>“Ver Más”</strong> se encuentra la opción <strong>“Editar”</strong> que permite editar la información de la <strong>pinta</strong> utilizando el formulario de registro de donación.</p>
                <p>-Al seleccionar la opción <strong>“Eliminar”</strong> permite eliminar el registro seleccionado. Muestra un mensaje de confirmación antes de proceder, si aceptamos, desaparece el registro.</p>

                <div className="video-container">
                    <h2>Video informativo</h2>
                    <YouTube videoId="3AQxFUwG96g" opts={videoOptions} />
                </div>
            </div>
        </div>
    )
}

export default PintasHelp
