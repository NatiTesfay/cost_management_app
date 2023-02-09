import Card from "react-bootstrap/Card";

export default function Hero() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://i.dailymail.co.uk/1s/2020/05/12/15/28302814-8311735-image-m-92_1589292158179.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>
          <img src="https://cdn.shopify.com/s/files/1/2170/8465/files/Metallic_Steve_Madden_Pink_and_Red-01_300x.png?v=3022404403441632771" alt="logo"/>
        </Card.Title>

      </Card.ImgOverlay>
    </Card>
  );
}
