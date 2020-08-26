import React from 'react'

export default function PokemonList( {pokemon }) {
  return (
    <div>
      { pokemon.map(p => (
        // we can use the pokemon name as the key because all names are unique
        <div key={p}>{p}</div>
      )) }
    </div>
  )
}
