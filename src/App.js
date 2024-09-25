
import './App.css';
import { useThemeContext } from './context/ThemeContext';

import Home from './page/Home';


function App() {
  const {contextTheme}=useThemeContext()
  return (
    <div className= {contextTheme?'App':'AppLight'}>
 
<Home/>

    </div>
  );
}

export default App;
