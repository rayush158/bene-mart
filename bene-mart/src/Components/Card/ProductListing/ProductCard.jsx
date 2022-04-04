import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({
  product: { title, image, deliveryType, price, categoryName },
}) => {
  return (
    <Card
      style={{ width: "15rem", height: "20rem" }}
      className="bg-dark text-white"
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Text>{title}</Card.Text>
        <Card.Title>{price}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
