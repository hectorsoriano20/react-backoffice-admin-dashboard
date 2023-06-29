import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/list/List.users";
import PintasList from "./pages/list/List.pintas";
import BancosList from "./pages/list/List.bancos";
import CitasList from "./pages/list/List.citas";
import CompradoresList from "./pages/list/List.compradores";
import SingleUsers from "./pages/single/Single.users";
import SinglePintas from "./pages/single/Single.pintas";
import SingleBancos from "./pages/single/Single.bancos";
import SingleCitas from "./pages/single/Single.citas";
import SingleCompradores from "./pages/single/Single.compradores";
import NewPintas from "./pages/new/New.pintas";
import NewUsers from "./pages/new/New.users";
import NewBancos from "./pages/new/New.bancos";
import NewCitas from "./pages/new/New.citas";
import NewCompradores from "./pages/new/New.compradores";
import EditPintas from "./pages/edit/edit.pintas";
import EditUsers from "./pages/edit/edit.users";
import EditBancos from "./pages/edit/edit.bancos";
import EditaCitas from "./pages/edit/edit.citas";
import EditCompradores from "./pages/edit/edit.compradores";
import Help from "./pages/help/Help";
import UsersHelp from "./components/help.component/help.component.users";
import PintasHelp from "./components/help.component/help.component.pintas";
import BancosHelp from "./components/help.component/help.component.bancos";
import CitasHelp from "./components/help.component/help.component.citas";
import CompradoresHelp from "./components/help.component/help.component.compradores";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { userInputs, pintasInputs, userInputsSend, bancosInputs, citasInputs, compradoresInputs } from "./formSource.js";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {
  
  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? (children) : <Navigate to="/login"/>
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path='login' element={<Login/>}/>
            <Route index element={<RequireAuth><Home /></RequireAuth>} />
            
            <Route path="users">
              <Route index element={<RequireAuth><UserList/></RequireAuth>}/>
              <Route path=":id" element={<RequireAuth><SingleUsers/></RequireAuth>}/>
              <Route path='new' element={<RequireAuth><NewUsers inputs = {userInputsSend} title="Crear Nuevo Usuario"/></RequireAuth>}/>
              <Route path='edit/:id' element={<RequireAuth><EditUsers inputs = {userInputs} title="Editar Usuario "/></RequireAuth>}/>
            </Route>
            <Route path="pintas">
              <Route index element={<RequireAuth><PintasList/></RequireAuth>}/>
              <Route path=":id" element={<RequireAuth><SinglePintas/></RequireAuth>}/>
              <Route path='new' element={<RequireAuth><NewPintas inputs = {pintasInputs} title="Agregar Nueva Pinta"/></RequireAuth>}/>
              <Route path='edit/:id' element={<RequireAuth><EditPintas inputs = {pintasInputs} title="Editar Pinta "/></RequireAuth>}/>
            </Route>
            <Route path="bancos">
              <Route index element={<RequireAuth><BancosList/></RequireAuth>}/>
              <Route path=":id" element={<RequireAuth><SingleBancos/></RequireAuth>}/>
              <Route path='new' element={<RequireAuth><NewBancos inputs = {bancosInputs} title="Agregar Nuevo Banco"/></RequireAuth>}/>
              <Route path='edit/:id' element={<RequireAuth><EditBancos inputs = {bancosInputs} title="Editar Banco de Sangre "/></RequireAuth>}/>
            </Route>
            <Route path="citas">
              <Route index element={<RequireAuth><CitasList/></RequireAuth>}/>
              <Route path=":id" element={<RequireAuth><SingleCitas/></RequireAuth>}/>
              <Route path='new' element={<RequireAuth><NewCitas inputs = {citasInputs} title="Agregar Nueva Cita"/></RequireAuth>}/>
              <Route path='edit/:id' element={<RequireAuth><EditaCitas inputs = {citasInputs} title="Editar Cita "/></RequireAuth>}/>
            </Route>
            <Route path="compradores">
              <Route index element={<RequireAuth><CompradoresList/></RequireAuth>}/>
              <Route path=":id" element={<RequireAuth><SingleCompradores/></RequireAuth>}/>
              <Route path='new' element={<RequireAuth><NewCompradores inputs = {compradoresInputs} title="Agregar Nueva Solicitud de Compra"/></RequireAuth>}/>
              <Route path='edit/:id' element={<RequireAuth><EditCompradores inputs = {compradoresInputs} title="Editar Solicitud de Compra "/></RequireAuth>}/>
            </Route>
            <Route path="ayuda">
              <Route index element={<RequireAuth><Help/></RequireAuth>}/>
              <Route path="users" element={<RequireAuth><UsersHelp/></RequireAuth>}/>
              <Route path="pintas" element={<RequireAuth><PintasHelp/></RequireAuth>}/>
              <Route path="bancos" element={<RequireAuth><BancosHelp/></RequireAuth>}/>
              <Route path="citas" element={<RequireAuth><CitasHelp/></RequireAuth>}/>
              <Route path="compradores" element={<RequireAuth><CompradoresHelp/></RequireAuth>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
