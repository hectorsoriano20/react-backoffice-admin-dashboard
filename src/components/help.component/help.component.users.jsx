import React from 'react';
import "./help.component.scss"
import SidebarAyuda from '../sidebar.ayuda/Sidebar.ayuda';
import NavbarAyuda from '../navbar.ayuda/Navbar.ayuda';
import YouTube from 'react-youtube';

const UsersHelp = () => {
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
                <h1>INFORMACIÓN SOBRE LOS USUARIOS</h1>
                <p>Al ingresar al módulo, presenta el estatus actual de los <strong>usuarios registrados</strong>. Adicionalmente, permite desplegar el listado de <strong>usuarios</strong>.</p>

                <h2>Crear Nuevo Usuario</h2>
                <p>Al desplegar el listado, permite seleccionar la opción <strong>“Crear Nuevo Usuario”</strong> muestra una pantalla con el formulario de registro, donde se toman los datos del <strong>usuario</strong>.</p>
                
                <h2>Manejar las opciones de la tabla</h2>
                <p>Cada registro tiene dos opciones, <strong>“Ver Más”</strong> y <strong>“Eliminar”</strong>.</p>
                <p>-Al seleccionar la opción <strong>“Ver Más”</strong> muestra una pantalla con información del registro incluyendo datos relevantes del <strong>usuario</strong> y un gráfico con la cantidad de pintas donadas en los últimos meses. Adicionalmente, permite desplegar un listado de las donaciones realizadas por dicho <strong>usuario</strong>.</p>
                <p>Dentro de la pantalla <strong>“Ver Más”</strong> se encuentra la opción <strong>“Editar”</strong> que permite editar la información del <strong>usuario</strong> utilizando el formulario de registro de usuarios.</p>
                <p>-Al seleccionar la opción <strong>“Eliminar”</strong> permite eliminar el registro seleccionado. Muestra un mensaje de confirmación antes de proceder, si aceptamos, desaparece el registro.</p>

                

                <div className="video-container">
                    <h2>Video informativo</h2>
                    <YouTube videoId="WXjb0kl94T4" opts={videoOptions} />
                </div>
            </div>
        </div>
    )
}

export default UsersHelp
