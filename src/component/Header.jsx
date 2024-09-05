import { Link } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";

function Header() {
  return (
    <>
      <header>
        <div className="üyeDiv">
          <FaUserLarge className="icon" />
          <Link to="/kayit" className="kayitLink">
            KAYIT OL
          </Link>
          <label className="slash">|</label>
          <Link to="/giris" className="girisLink">
            ÜYE GİRİŞİ
          </Link>
        </div>
      </header>
      <nav>
        <div className="sayfalarDiv">
          <Link to="/" className="anasayfa">
            Ana Sayfa
          </Link>
          <Link to="/urunler" className="ürünler">
            Ürünler
          </Link>
          <Link to="/sepet">Sepet</Link>
          <Link to="/hakkimizda" className="hakkimizda">
            Hakkımızda
          </Link>
          <Link to="/iletisim" className="iletisim">
            İletişim
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
