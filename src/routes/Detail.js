import React from "react";
import PropTypes from "prop-types";
import Pokemon from "../components/contents/Pokemon";
import { PokeAPI } from "../utils/API";

const Detail = ({ history, location, match }) => {
  console.log(match);

  const { no } = match.params;
  //   PokeAPI.pokemon(props);
  return <Pokemon pokemonNo={no}>detail</Pokemon>;
};

Detail.propTypes = {};

export default Detail;
