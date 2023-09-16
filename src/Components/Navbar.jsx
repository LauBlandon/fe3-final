import { Link } from "react-router-dom";
import ThemeContext from "./utils/global.context"
import { useContext } from "react"


const Navbar = () => {

  const {theme, handleChangeTheme} = useContext(ThemeContext);

  return (
    <nav>
      <img src="images/DentalLogo.png" alt="dental-logo" />
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/favs">Favs</Link></li>
        <li><Link to="/contacto">Contact</Link></li>
        <button onClick={handleChangeTheme}
        style={{background: theme.background, color: theme.font}} >theme</button>
      </ul>
    </nav>
  )
}

export default Navbar
