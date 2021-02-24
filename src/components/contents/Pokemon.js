import React from "react";
import PropTypes from "prop-types";

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  // const { sprites } = pokemon;
  // const pokeIcons = Object.values(sprites)
  //   .filter((value) => {
  //     return value !== null && typeof value === "string";
  //   })
  //   .sort();

  return (
    <div>
      {pokemon && <label>{pokemon.name}</label>}
      {/* {sprites && pokeIcons.map((icon) => <img src={icon} />)} */}
    </div>
  );
};

Pokemon.propTypes = {};

export default Pokemon;
