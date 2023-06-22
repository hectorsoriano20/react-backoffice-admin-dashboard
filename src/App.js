import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserList from "./pages/list/List.users";
import PintasList from "./pages/list/List.pintas";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { userInputs, productInputs } from "./formSource.js";
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
              <Route path=":id" element={<RequireAuth><Single/></RequireAuth>}/>
              <Route path='new' element={<RequireAuth><New inputs = {userInputs} title="Crear Nuevo Usuario"/></RequireAuth>}/>
            </Route>
            <Route path="pintas">
              <Route index element={<RequireAuth><PintasList/></RequireAuth>}/>
              <Route path=":productId" element={<RequireAuth><Single/></RequireAuth>}/>
              <Route path='new' element={<RequireAuth><New inputs = {productInputs} title="Agregar Nueva Pinta "/></RequireAuth>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
