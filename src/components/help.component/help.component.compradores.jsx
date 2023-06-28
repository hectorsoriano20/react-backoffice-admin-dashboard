
import React from 'react';
import "./help.component.scss"
import SidebarAyuda from '../sidebar.ayuda/Sidebar.ayuda';
import NavbarAyuda from '../navbar.ayuda/Navbar.ayuda';

const CompradoresHelp = () => {
    return (
        <div className="list">
            <SidebarAyuda/>
            <div className="listContainer help-container">
                <h2>Ver listado de solicitudes de compra</h2>
                <p>Al ingresar al módulo, presenta la lista de <strong>solicitudes de compra de pintas de sangre</strong> que se encuentran registrados en el sistema.</p>

                <h2>Manejar las opciones de la tabla</h2>
                <p>Cada registro tiene dos opciones, <strong>“Ver Más”</strong> y <strong>“Eliminar”</strong>.</p>
                <p>-Al seleccionar la opción <strong>“Ver Más”</strong> muestra la siguiente pantalla con información relevante de la solicitud de compra.</p>
                <p>Dentro de la pantalla <strong>“Ver Más”</strong> se encuentra la opción <strong>“Editar”</strong> que permite editar la información de la solicitud de compra utilizando el formulario de registro y actualizar la base de datos.</p>
                <p>-Al seleccionar la opción <strong>“Eliminar”</strong> muestra un mensaje de confirmación antes de eliminar el registro y luego de aceptar, desaparece el mismo.</p>

                <h2>Agregar Nuevo Comprador</h2>
                <p>Al seleccionar la opción <strong>“Agregar Nuevo Comprador”</strong> muestra una pantalla con el formulario de registro, donde se toman los datos de la solicitud de compra para luego enviar a nuestro registro.</p>
            </div>
        </div>
    )
}

export default CompradoresHelp
