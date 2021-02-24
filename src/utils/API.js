const URL = "https://pokeapi.co/api/v2";

export const methodOption = {
  get: () => ({
    method: "GET",
  }),
  post: (contents) => ({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents,
    }),
  }),
  put: (contents) => ({
    method: "PUT",
  }),
  delete: (contents) => ({
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents,
    }),
  }),
};

const request = async (api, method) => {
  try {
    const response = await fetch(`${URL}/${api}`, method);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

export const PokeAPI = {
  pokemon: (name) => {
    return request(`pokemon/${name}`, methodOption.get());
  },

  pokemonList: (offest, limit) => {
    return request(
      `pokemon/?offset=${offest}&limit=${limit}`,
      methodOption.get()
    );
  },
};
