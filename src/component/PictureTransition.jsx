import { useState, useEffect } from "react";
function Pictures() {
  const [aktifResim, setAktifResim] = useState(0);
  const resimSayisi = 5;
  const resimler = [];

  for (let i = 1; i <= resimSayisi; i++) {
    resimler.push(`img/yemek${i}.jpg`);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setAktifResim((prevAktifResim) => (prevAktifResim + 1) % resimler.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [aktifResim]);

  return (
    <>
      <div>
        <img className="yemek1" src={resimler[aktifResim]} />
      </div>
    </>
  );
}

export default Pictures;
