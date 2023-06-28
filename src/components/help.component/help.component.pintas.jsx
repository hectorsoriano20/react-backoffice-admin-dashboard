
import React from 'react';
import "./help.component.scss"
import SidebarAyuda from '../sidebar.ayuda/Sidebar.ayuda';
import NavbarAyuda from '../navbar.ayuda/Navbar.ayuda';

const PintasHelp = () => {
    return (
        <div className="list">
            <SidebarAyuda/>
            <div className="listContainer help-container">
                <h2>Ver listado de pintas</h2>
                <p>Al ingresar al módulo, presenta varios gráficos indicando con porcentajes, según el tipo de pinta, la cantidad de <strong>pintas de sangre</strong> existentes en el sistema. Adicional, muestra la lista actual de <strong>pintas</strong> registradas mediante donaciones en el sistema.</p>

                <h2>Manejar las opciones de la tabla</h2>
                <p>Cada registro tiene dos opciones, <strong>“Ver Más”</strong> y <strong>“Eliminar”</strong>.</p>
                <p>-Al seleccionar la opción <strong>“Ver Más”</strong> muestra la siguiente pantalla con información de la donación.</p>
                <p>Dentro de la pantalla <strong>“Ver Más”</strong> se encuentra la opción <strong>“Editar”</strong> que permite editar la información del registro utilizando el formulario de registro de donación y actualizar la base de datos.</p>
                <p>-Al seleccionar la opción <strong>“Eliminar”</strong> muestra un mensaje de confirmación antes de eliminar el registro y luego de aceptar, desaparece el mismo.</p>

                <h2>Agregar Nueva Pinta</h2>
                <p>Al seleccionar la opción <strong>“Agregar Nueva Pinta”</strong> muestra una pantalla con el formulario de registro de una donación, donde se toman los datos para luego enviar a nuestro registro.</p>
            </div>
        </div>
    )
}

export default PintasHelp
