import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import ThemeContext, { themes } from "./Components/utils/global.context";
import { useState } from "react";
import Layout from "./Components/Layout";

function App() {
  const [theme, setTheme] = useState(themes.light);
  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
        <Layout>
          <Navbar />
          <Outlet />
          <Footer />
        </Layout>
      </ThemeContext.Provider>
    </div >
  );
}
export default App;