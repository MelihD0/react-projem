const GirisSayfa = () => {
  return (
    <>
      {/*GİRİŞ KISMI*/}
      <form id="login">
        <h1 id="title">ÜYE GİRİŞİ</h1>
        <br />
        <br />
        <label id="mail-label">E-posta</label>
        <input id="mail" type="email" required />
        <br /> <br />
        <label id="password-label">Şifre</label>
        <input id="password" type="password" required />
        <br />
        <br />
        <input type="checkbox" />
        <label> Beni hatırla </label>
        <br />
        <br />
        <button type="submit" id="loginButton">
          GİRİŞ YAP
        </button>
      </form>
    </>
  );
};
export default GirisSayfa;
