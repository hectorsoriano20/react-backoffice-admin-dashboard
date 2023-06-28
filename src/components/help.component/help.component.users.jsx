
import React from 'react';
import "./help.component.scss"
import SidebarAyuda from '../sidebar.ayuda/Sidebar.ayuda';
import NavbarAyuda from '../navbar.ayuda/Navbar.ayuda';

const UsersHelp = () => {
    return (
        <div className="list">
            <SidebarAyuda/>
            <div className="listContainer help-container">
                <h2>Ver listado de usuarios</h2>
                <p>Al ingresar al módulo, presenta la lista de <strong>usuarios</strong> que hay registrados en el sistema.</p>

                <h2>Manejar las opciones de la tabla</h2>
                <p>Cada registro tiene dos opciones, <strong>“Ver Más”</strong> y <strong>“Eliminar”</strong>.</p>
                <p>-Al seleccionar la opción <strong>“Ver Más”</strong> muestra la siguiente pantalla con información del registro (datos relevantes y un grafico con la cantidad de pintas donadas en los últimos meses).</p>
                <p>Dentro de la pantalla <strong>“Ver Más”</strong> se encuentra la opción <strong>“Editar”</strong> que permite editar la información del registro utilizando el formulario de registro y actualizar la base de datos.</p>
                <p>-Al seleccionar la opción <strong>“Eliminar”</strong> muestra un mensaje de confirmación antes de eliminar el registro y luego de aceptar, desaparece el mismo.</p>

                <h2>Crear Nuevo Usuario</h2>
                <p>Al seleccionar la opción <strong>“Crear Nuevo Usuario”</strong> muestra una pantalla con el formulario de registro, donde se toman los datos del usuario para luego enviar a nuestro registro.</p>
            </div>
        </div>
    )
}

export default UsersHelp
