export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'cedula', headerName: 'Cédula', width: 130 },
  { field: 'nombre', headerName: 'Nombre', width: 100 },
  { field: 'apellido', headerName: 'Apellido', width: 100 },
  { field: 'email', headerName: 'Correo Electrónico', width: 250 },
  { field: 'edad', headerName: 'Edad', width: 70 },
  { field: 'tipo', headerName: 'Tipo de Sangre', width: 120 },
  { field: 'estado', headerName: 'Estado', width: 90 },
  
]

export const pintaColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre Completo', width: 250 },
  { field: 'email', headerName: 'Correo Electrónico', width: 200 },
  { field: 'tipo', headerName: 'Tipo', width: 70 },
  { field: 'banco', headerName: 'Banco de Sangre', width: 200 },
  { field: 'fecha', headerName: 'Fecha Donación', width: 170 },
  { field: 'estado', headerName: 'Estado', width: 90 },
]

export const bancoColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre del Banco', width: 400 },
  { field: 'direccion', headerName: 'Direccion del Banco', width: 500 },
]

export const citaColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nombre', headerName: 'Nombre Comprador', width: 200 },
  { field: 'sangrecita', headerName: 'Pinta a Donar', width: 120 },
  { field: 'fecha', headerName: 'Fecha de Cita Solicitada', width: 200 },
  { field: 'hora', headerName: 'Hora de Cita Solicitada', width: 170 },
  { field: 'estado', headerName: 'Estado', width: 90 },
]

export const compradoresColumns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'nombre', headerName: 'Nombre Comprador', width: 200 },
  { field: 'sangrecompra', headerName: 'Pinta a Comprar', width: 150 },
  { field: 'donante', headerName: 'Nombre del donante', width: 200 },
  { field: 'sangredonacion', headerName: 'Pinta a Donar', width: 150 },
  { field: 'edad', headerName: 'Edad del donante', width: 140 },
  { field: 'estado', headerName: 'Estado', width: 90 },
]