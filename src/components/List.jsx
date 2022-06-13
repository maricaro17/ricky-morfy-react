import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import api from "../services/api";
import Cards from "./Cards";

const List = () => {
  const [rickyMorty, setRickyMorty] = useState([]);
  useEffect(() => {
    if (rickyMorty.length === 0) {
      api.getCharters().then((results) => {
        setRickyMorty(results);
      });
    }
  }, [rickyMorty]);
  return (
    <Container>
      <h1>Rick And Morty</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {rickyMorty.map((personajes, index) => (
          <Cards personajes={personajes} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default List;
