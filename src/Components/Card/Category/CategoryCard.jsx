import React from "react";
import { Card } from "react-bootstrap";

const CategoryCard = ({ item: { image, categoryName } }) => {
  return (
    <div>
      <Card
        style={{ width: "10rem", height: "13rem" }}
        className=" bg-dark text-white"
      >
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title style={{ fontSize: "13px" }} className="uppercase">
            {categoryName}
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CategoryCard;
