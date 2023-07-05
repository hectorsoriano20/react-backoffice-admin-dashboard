export const userInputs = [
  {
    id: 1,
    label: "Cédula",
    type: "number",
    placeholder: "",
    name: "Cedula_Persona"
  },
  {
    id: 2,
    label: "Nombre",
    type: "text",
    placeholder: "",
    name: "Nombre_Persona"
  },
  {
    id: 3,
    label: "Apellido",
    type: "text",
    placeholder: "",
    name: "Apellido_Persona"
  },
  {
    id: 4,
    label: "Correo",
    type: "email",
    placeholder: "",
    name: "Correo_Persona"
  },
  {
    id: 6,
    label: "Numero de Teléfono",
    type: "number",
    placeholder: "",
    name: "Numero_Persona"
  },
  {
    id: 7,
    label: "Edad",
    type: "number",
    placeholder: "",
    name: "Edad_Persona"
  },
  {
    id: 8,
    label: "Fecha de Nacimiento",
    type: "date",
    placeholder: "",
    name: "FechaNacimiento_Persona"
  },
  {
    id: 9,
    label: "Tipo de Sangre",
    type: "select",
    options: ["Seleccionar...","A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    name: "Tipo_Sangre_Persona"
  },
  {
    id: 10,
    label: "Estado",
    type: "select",
    options: ["Seleccionar", "Activo", "Inactivo"],
    name: "Estado_Persona"
  },
];

export const userInputsSend = [
  {
    id: 1,
    label: "Cédula",
    type: "number",
    placeholder: "",
    name: "Cedula_Persona"
  },
  {
    id: 2,
    label: "Nombre",
    type: "text",
    placeholder: "",
    name: "Nombre_Persona"
  },
  {
    id: 3,
    label: "Apellido",
    type: "text",
    placeholder: "",
    name: "Apellido_Persona"
  },
  {
    id: 4,
    label: "Correo",
    type: "email",
    placeholder: "",
    name: "Correo_Persona"
  },
  {
    id: 6,
    label: "Numero de Teléfono",
    type: "number",
    placeholder: "",
    name: "Numero_Persona"
  },
  {
    id: 7,
    label: "Edad",
    type: "number",
    placeholder: "",
    name: "Edad_Persona"
  },
  {
    id: 8,
    label: "Fecha de Nacimiento",
    type: "date",
    placeholder: "",
    name: "FechaNacimiento_Persona"
  },
  {
    id: 9,
    label: "Tipo de Sangre",
    type: "select",
    options: ["Seleccionar...","A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    name: "Tipo_Sangre_Persona"
  },
  {
    id: 10,
    label: "Estado",
    type: "select",
    options: ["Seleccionar...", "Activo", "Inactivo"],
    name: "Estado_Persona"
  },
  
];

export const pintasInputs = [
  {
    id: 1,
    label: "Cedula",
    type: "text",
    placeholder: "",
    name: "Cedula_Persona"
  },
  {
    id: 2,
    label: "Nombre y Apellido",
    type: "text",
    placeholder: "",
    name: "Nombre_Apellido_Pinta"
  },
  {
    id: 3,
    label: "Correo",
    type: "email",
    placeholder: "",
    name: "Correo_Pinta"

  },
  {
    id: 4,
    label: "Tipo de Sangre donada",
    type: "select",
    options: ["Seleccionar...", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    name: "Tipo_Pinta"
  },
  {
    id: 5,
    label: "Fecha donación",
    type: "date",
    placeholder: "",
    name: "FechaDonacion_Pinta"
  },
  {
    id: 6,
    label: "Nombre Banco de Sangre",
    type: "select",
    options: [],
    name: "Nombre_BancoSangre"
  },
  {
    id: 7,
    label: "Estado Pinta",
    type: "select",
    options: ["Seleccionar...", "Vigente", "Entregada", "Caducada"],
    name: "Estado_Pinta"
  },
];

export const bancosInputs = [
  {
    id: 1,
    label: "Nombre del Banco de Sangre",
    type: "text",
    placeholder: "",
    name: "Nombre_BancoSangre"
  },
  {
    id: 2,
    label: "Direccion del Banco de Sangre",
    type: "text",
    placeholder: "",
    name: "Ubicacion_BancoSangre"

  },
  {
    id: 3,
    label: "Latitud del Banco de Sangre",
    type: "text",
    placeholder: "",
    name: "Latitud_BancoSangre",
    validate: (value) => !isNaN(value) && Number(value) === parseFloat(value)
  },
  {
    id: 4,
    label: "Longitud del Banco de Sangre",
    type: "text",
    placeholder: "",
    name: "Longitud_BancoSangre",
    validate: (value) => !isNaN(value) && Number(value) === parseFloat(value)
  },
]


export const citasInputs = [
  {
    id: 1,
    label: "Cédula del Solicitante",
    type: "number",
    placeholder: "",
    name: "Cedula_Cita"
  },
  {
    id: 2,
    label: "Nombre del Solicitante",
    type: "text",
    placeholder: "",
    name: "Nombre_Cita"
  },
  {
    id: 3,
    label: "Correo asociado a la cita",
    type: "email",
    placeholder: "",
    name: "Correo"
  },
  {
    id: 4,
    label: "Tipo de Sangre a Donar",
    type: "select",
    options: ["Seleccionar...", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    name: "Tipo_Sangre_Cita"
  },
  {
    id: 5,
    label: "Fecha Cita",
    type: "date",
    placeholder: "",
    name: "Fecha_Cita"

  },
  {
    id: 6,
    label: "Hora Cita",
    type: "time",
    placeholder: "",
    name: "Hora_Cita"

  },
  {
    id: 7,
    label: "Estado",
    type: "select",
    options: ["Seleccionar...", "Aprobada", "Rechazada"],
    name: "Estado_Cita"

  },
]

export const compradoresInputs = [
  {
    id: 1,
    label: "Cédula del Comprador",
    type: "number",
    placeholder: "",
    name: "Cedula_Comprador"
  },
  {
    id: 2,
    label: "Nombre del Comprador",
    type: "text",
    placeholder: "",
    name: "Nombre_Comprador"
  },
  {
    id: 3,
    label: "Correo del Comprador",
    type: "email",
    placeholder: "",
    name: "Correo_Compra"

  },
  {
    id: 4,
    label: "Telefono del Comprador",
    type: "number",
    placeholder: "",
    name: "Telefono_Compra",
  },
  {
    id: 5,
    label: "Tipo de Sangre solicitada para Compra",
    type: "select",
    options: ["Seleccionar...", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    name: "Grupo_Sanguineo_Compra"

  },
  {
    id: 6,
    label: "Cédula del Donante",
    type: "number",
    placeholder: "",
    name: "Cedula_Donante"

  },
  {
    id: 7,
    label: "Nombre del Donante",
    type: "text",
    placeholder: "",
    name: "Nombre_Donante"

  },
  {
    id: 8,
    label: "Tipo de Sangre del Donante",
    type: "select",
    options: ["Seleccionar...", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    name: "Grupo_Sanguineo_Donante"

  },
  {
    id: 9,
    label: "Edad del donante",
    type: "number",
    placeholder: "",
    name: "Edad_Donante"

  },
  {
    id: 10,
    label: "Estado",
    type: "select",
    options: ["Seleccionar...", "Aprobada", "Rechazada"],
    name: "Estatus_Compra"

  },
]