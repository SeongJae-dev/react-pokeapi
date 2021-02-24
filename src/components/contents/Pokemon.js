import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { PokeAPI } from "../../utils/API";

const Pokemon = (props) => {
  console.log(props);
  const [pokemon, setPokemon] = useState(null);
  const { pokemonNo } = props;

  useEffect(() => {
    const fetchData = async () => {
      const res = await PokeAPI.pokemon(Number(pokemonNo) + 1);
      setPokemon(res);
    };
    fetchData();
  }, []);

  return (
    <div>
      {pokemon && <label>{pokemon.name}</label>}
      {pokemon && <img src={pokemon.sprites.front_default} />}
    </div>
  );
};

Pokemon.propTypes = {};

export default Pokemon;
