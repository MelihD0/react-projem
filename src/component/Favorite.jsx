import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Favorite() {
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
  ];
  return (
    <>
      <h1 className="FavoriteTitle">EN ÇOK TERCİH EDİLEN ÜRÜNLER</h1>
      <div className="FavoriteDiv">
        {kartVerileri.map((kart, index) => (
          <Card key={index} className="FavoriteCard">
            <Card.Img
              variant="top"
              src={kart.src}
              className="FavoriteCardIMG"
            />
            <Card.Body>
              <Card.Title>{kart.title}</Card.Title>
              <Card.Text>{kart.text}</Card.Text>
              <Button variant="primary" className="FavoriteButton">
                SEPETE EKLE
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Favorite;
