import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";

export default class List extends Component {
  constructor() {
    super();
    this.state = {
      rickyMorty: [],
    };
  }

  componentDidMount() {
    this.getRickAndMorty();
  }
  getRickAndMorty = async () => {
    const url = "https://rickandmortyapi.com/api/character/";
    const resp = await fetch(url);
    const { results } = await resp.json();

    this.setState({
      rickyMorty: results,
    });
  };
  render() {
    return (
      <Container>
        <h1>Rick And Morty</h1>
        <hr />
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.state.rickyMorty.map((personajes, index) => (
            <Cards personajes={personajes} key={index} />
          ))}
        </div>
      </Container>
    );
  }
}