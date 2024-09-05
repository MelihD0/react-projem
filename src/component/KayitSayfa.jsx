const KayitSayfa = () => {
  return (
    <>
      {/*KAYIT KISMI*/}
      <form id="register">
        <h1 id="title">KAYIT OLMA BÖLÜMÜ</h1>
        <br /> <br />
        <label id="name-label">Ad</label>
        <input id="name" type="text" required />
        <br /> <br />
        <label id="surname-label">Soyad</label>
        <input id="surname" type="text" required />
        <br /> <br />
        <label id="mail-label">E-posta</label>
        <input id="mail" type="email" required />
        <br /> <br />
        <label id="password-label">Şifre</label>
        <input id="password" type="password" required />
        <br /> <br />
        <label id="phone-label">Telefon</label>
        <input id="phone" type="tel" required maxLength="11" />
        <br /> <br />
        <label id="address-label">Adres</label>
        <input id="address" type="text" required />
        <br /> <br />
        <label id="date-label">Doğum Tarihi</label>
        <input id="date" type="date" required />
        <br /> <br />
        <input type="checkbox" required />
        <label> Üyelik Sözleşmesini okudum, onaylıyorum. </label>
        <br /> <br />
        <button type="submit" id="registerButton">
          KAYIT OL
        </button>
      </form>
    </>
  );
};
export default KayitSayfa;
