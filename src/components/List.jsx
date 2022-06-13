import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  characterList,
  nextPage,
  previousPage,
} from "../redux/actions/characterAction";
import Cards from "./Cards";
import CustomButton from "./CustomButton";

const List = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const [nextUrl, setNextUrl] = useState(null);
  const [prevUrl, setPrevUrl] = useState(null);
  useEffect(() => {
    if (characters.results.length === 0) {
      dispatch(characterList());
    }
    setPrevUrl(characters.prev);
    setNextUrl(characters.next);
  }, [characters, nextUrl, prevUrl, dispatch]);

  const handleNext = () => {
    dispatch(nextPage(nextUrl));
  };
  const handlePreviousPage = () => {
    dispatch(previousPage(prevUrl));
  };

  return (
    <Container>
      <h1>Rick And Morty</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {characters.results.map((personajes, index) => (
          <Cards personajes={personajes} key={index} />
        ))}
      </div>
      <div className="d-flex justify-content-between">
      <CustomButton
        value="prev"
        color="white"
        backgroundColor="black"
        disabled={prevUrl ? false : true}
        onClick={handlePreviousPage}
      ></CustomButton>
      <CustomButton
        value="next"
        color="white"
        backgroundColor="black"
        disabled={nextUrl ? false : true}
        onClick={handleNext}
      ></CustomButton>
      </div>
    </Container>
  );
};

export default List;
