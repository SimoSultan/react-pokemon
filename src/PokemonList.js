import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { capitalize, getPokemonNumber } from './Helpers'

// using destructuring because props is coming into this component as props.pokemon
export default function PokemonList( {pokemon }) {

  return (

    <ListGroup>
      {pokemon.map(p => (
        // we can use the pokemon name as the key because all names are unique
        <ListGroup.Item key={p}>#{getPokemonNumber(p.url)} {capitalize(p.name)}</ListGroup.Item>
      ))}
    </ListGroup>

  )
}
 