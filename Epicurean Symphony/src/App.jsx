
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"


function App() {
  return (  
    <div  style={{ display: 'flex', margin: 0, padding: 0}}>
         <Navbar />   
        <Outlet />
    </div>
  )
}
export default App;
