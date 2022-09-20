import { ThemeContext } from "@emotion/react";
import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Allrouter from "./components/Allrouter";
import Datacon from "./components/Datacon";
import Navbar from "./components/Navbar";
import Picture from "./components/picture";
import './App.css';

// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'light',
//   },
// });
function App() {
  const [dark, setDark] = useState(false);

  console.log(dark);
  // const l=useLocation()
  // console.log(l,"df")
  return (
    
   <div className={dark ? "dark": "light"} >    
        
    <button onClick={()=>dark ? setDark(false):setDark(true)}>Toggle Theme</button>
   <Navbar/>
  <Allrouter/>
    </div>
   
  );
}

export default App;
