import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Pokemon from "./Pokemon";
import { PokeAPI } from "../../utils/API";
import { Link } from "react-router-dom";

const PokemonList = (props) => {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      //   const { results } = await PokeAPI.pokemonList(0, 151);
      const { results } = await PokeAPI.pokemonList(0, 20);
      setPokemonData(results);
    };

    fetchData();
  }, []);

  console.log(pokemonData);
  return (
    <div>
      {pokemonData &&
        pokemonData.map((data, index) => (
          <div key={index}>
            <Link to={`/pokemon/${index}`}>{data.name}</Link>
          </div>
        ))}
    </div>
  );
};

PokemonList.propTypes = {};

export default PokemonList;
