import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./component/KayitSayfa.css";
import "./component/Header.css";
import "./component/PictureTransition.css";
import "./component/Favorite.css";
import "./component/Footer.css";
import "./component/GirisSayfa.css";
import "./component/iletisim.css";
import "./component/Hakkimizda.css";
import "./component/Urunler.css";
import "./component/Sepet.css";
import Header from "./component/Header.jsx";
import PictureTransition from "./component/PictureTransition.jsx";
import Favorite from "./component/Favorite.jsx";
import Footer from "./component/Footer.jsx";
import KayitSayfa from "./component/KayitSayfa";
import GirisSayfa from "./component/GirisSayfa";
import İletisim from "./component/iletisim.jsx";
import Hakkimizda from "./component/Hakkimizda.jsx";
import Urunler from "./component/Urunler.jsx";
import Sepet from "./component/Sepet.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PictureTransition />
              <Favorite />
              <Footer />
            </>
          }
        />
        <Route path="/kayit" element={<KayitSayfa />} />
        <Route path="/giris" element={<GirisSayfa />} />
        <Route path="/iletisim" element={<İletisim />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/urunler" element={<Urunler />} />
        <Route path="/sepet" element={<Sepet />} />
      </Routes>
    </Router>
  );
}

export default App;
