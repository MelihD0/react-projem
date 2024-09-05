import { FaXTwitter, FaPhoneFlip, FaRegEnvelope } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer>
        <div>
          <hr />
          <p>
            Bu demo İnternet Sitesi içeriğinde yer alan tüm eserler Melih LTD
            ŞTİ'ye aittir.
          </p>
          <div className="iletisimDiv">
            <a href="" className="telefon">
              <FaPhoneFlip />
            </a>
            <a href="mailto:" className="mail">
              <FaRegEnvelope />
            </a>
            <a href="https://x.com/?lang=tr" target="blank" className="twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
