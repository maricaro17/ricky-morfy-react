import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ personajes }) => {
  const { image, name, species, id } = personajes;
  
  return (
    <div>
      <Card
        className="my-3 mx-3 bg-dark text-white"
        style={{ width: "18rem", color: "black" }}
      >
        <Link to={`/detalle/${id}`}>
          <Card.Img
            variant="top"
            src={image}
          />
        </Link>

        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{species}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
