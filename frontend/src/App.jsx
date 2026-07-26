import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/* ------------------ Components ------------------ */
import NavbarComponent from "./components/Navbar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

/* ------------------ Routing ------------------ */
import { Outlet } from "react-router-dom";

/* ------------------ Effects / Providers ------------------ */
import WheelScrollProvider from "./contexts/WheelScrollProvider";

/* ------------------ Visual Layers ------------------ */
import WaterLayer from "./WaterLayer";

function App() {
  return (
    <>
      <WheelScrollProvider multiplier={10}>
        <Layout>
          <NavbarComponent />
          <WaterLayer />
          <Outlet />
          <Footer />
        </Layout>
      </WheelScrollProvider>
    </>
  );
}

export default App;
