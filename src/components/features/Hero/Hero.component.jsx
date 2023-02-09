import Card from "react-bootstrap/Card";

export default function Hero() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://spdload.com/wp-content/uploads/2020/10/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%81%D1%82%D0%B0%D1%82%D1%8C%D0%B8-6.png"
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
