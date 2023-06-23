import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/list/List.users";
import PintasList from "./pages/list/List.pintas";
import SingleUsers from "./pages/single/Single.users";
import SinglePintas from "./pages/single/Single.pintas";
import New from "./pages/new/New";
import NewUsers from "./pages/new/New.users";
import EditPintas from "./pages/edit/edit.pintas";
import EditUsers from "./pages/edit/edit.users";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { userInputs, pintasInputs, userInputsSend } from "./formSource.js";
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
              <Route path='new' element={<RequireAuth><New inputs = {pintasInputs} title="Agregar Nueva Pinta "/></RequireAuth>}/>
              <Route path='edit/:id' element={<RequireAuth><EditPintas inputs = {pintasInputs} title="Editar Pinta "/></RequireAuth>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
