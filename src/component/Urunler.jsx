import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Urunler() {
  const kartVerileri = [
    {
      src: "img/steak.jpg",
      title: "Biftek",
      text: "150 TL",
    },
    {
      src: "img/hamburger.jpg",
      title: "Hamburger",
      text: "80 TL",
    },
    {
      src: "img/profiterol.jpg",
      title: "Profiterol",
      text: "60 TL",
    },
    {
      src: "img/sufle.jpg",
      title: "Sufle",
      text: "70 TL",
    },
    {
      src: "img/kola.jpg",
      title: "Kola",
      text: "30 TL",
    },
    {
      src: "img/ayran.jpg",
      title: "Ayran",
      text: "15 TL",
    },
    {
      src: "img/makarna.jpg",
      title: "Kremalı Makarna",
      text: "45 TL",
    },
    {
      src: "img/meyveSuyu.jpg",
      title: "Karışık Meyve Suyu",
      text: "20 TL",
    },
    {
      src: "img/citirtavuk.jpg",
      title: "Çıtır Tavuk",
      text: "75 TL",
    },
    {
      src: "img/kunefe.jpg",
      title: "Künefe",
      text: "100 TL",
    },
    {
      src: "img/manti.jpg",
      title: "Mantı",
      text: "90 TL",
    },
    {
      src: "img/kofte.jpg",
      title: "Köfte",
      text: "70 TL",
    },
  ];
  return (
    <>
      <h1 className="urunlertitle">ÜRÜNLERİMİZ</h1>
      <div className="urunCardDiv">
        {kartVerileri.map((kart, index) => (
          <Card key={index} className="card">
            <Card.Img variant="top" src={kart.src} className="cardIMG" />
            <Card.Body>
              <Card.Title>{kart.title}</Card.Title>
              <Card.Text>{kart.text}</Card.Text>
              <Button className="cardButton" variant="primary">
                SEPETE EKLE
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
export default Urunler;
