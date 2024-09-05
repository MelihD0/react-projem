function İletisim() {
  return (
    <>
      <div className="foot">
        <div id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48207.838385621806!2d27.516831098991894!3d40.95980011726623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4601d4c18e4e5%3A0xc572e1c0c57cb1b!2zVGVraXJkYcSfLCBTw7xsZXltYW5wYcWfYS9UZWtpcmRhxJ8!5e0!3m2!1str!2str!4v1703691484254!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
        </div>
        <div id="iletisim">
          <div id="adres">
            <h2>ADRESLERİMİZ</h2>
            <address className="add">
              Şube1: Karlık Caddesi Tekirdağ/Süleymanpaşa
              <br />
              Telefon:
            </address>
          </div>
        </div>
      </div>
    </>
  );
}

export default İletisim;
