import React from 'react';
import "./help.component.scss"
import SidebarAyuda from '../sidebar.ayuda/Sidebar.ayuda';
import NavbarAyuda from '../navbar.ayuda/Navbar.ayuda';
import YouTube from 'react-youtube';

const CompradoresHelp = () => {
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
                <h1>Ver listado de solicitudes de compra</h1>
                <p>Al ingresar al módulo, presenta varios gráficos indicando con porcentajes y cantidades, según el estado, las solicitudes de compra de <strong>pintas de sangre</strong> que se encuentran registrados. Adicionalmente, permite desplegar el listado de <strong>solicitudes de compra</strong>.</p>

                <h2>Agregar Nuevo Comprador</h2>
                <p>Al desplegar el listado, permite seleccionar la opción <strong>“Agregar Nuevo Comprador”</strong> donde muestra una pantalla con el formulario de registro, donde se toman los datos de la solicitud de <strong>compra</strong>.</p>

                <h2>Manejar las opciones de la tabla</h2>
                <p>Cada registro tiene dos opciones, <strong>“Ver Más”</strong> y <strong>“Eliminar”</strong>.</p>
                <p>-Al seleccionar la opción <strong>“Ver Más”</strong> muestra una pantalla con información relevante de la solicitud de <strong>compra</strong>.</p>
                <p>Dentro de la pantalla <strong>“Ver Más”</strong> se encuentra la opción <strong>“Editar”</strong> que permite editar la información de la <strong>solicitud de compra</strong> utilizando el formulario de registro de una solciitud de compra.</p>
                <p>-Al seleccionar la opción <strong>“Eliminar”</strong> permite eliminar el registro seleccionado. Muestra un mensaje de confirmación antes de proceder, si aceptamos, desaparece el registro.</p>

                
                <div className="video-container">
                    <h2>Video informativo</h2>
                    <YouTube videoId="JJ8WqtasAWw" opts={videoOptions} />
                </div>
            </div>
        </div>
    )
}

export default CompradoresHelp
