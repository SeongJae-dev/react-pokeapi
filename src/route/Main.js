import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { PokeAPI, methodOption } from "../utils/API";
import axios from "axios";
import Pokemon from "../components/contents/Pokemon";
import PokemonList from "../components/contents/PokemonList";

const PokeContent = styled.div`
  position: absolute;
  /* height: 539px;
  left: 47px;
  right: 112px;
  top: 504px; */
`;

export default function Main() {
  const [fetching, setFetching] = useState(false);
  // 스크롤 이벤트 핸들러

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight && fetching === false) {
      // 페이지 끝에 도달하면 추가 데이터를 받아온다
    }
    console.log(scrollHeight, scrollTop, clientHeight);
  };

  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const fetchData = async () => {
      const res = await PokeAPI.pokemon("eevee");
      setPokemon(res);
    };
    fetchData();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PokeContent>
      <PokemonList />
      {/* <div>{pokemon.forms.name}</div> */}
      {/* {pokemon && <Pokemon key={pokemon.id} pokemon={pokemon} />} */}
    </PokeContent>
  );
}
