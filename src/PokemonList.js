// import React, { useState, useEffect } from 'react'
// import React, { useState } from 'react'
// import React, { useEffect } from 'react'
import React from 'react'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import 'bootstrap/dist/css/bootstrap.min.css';
import { capitalize, getPokemonNumber } from './Helpers'
// import axios from 'axios'

// using destructuring because props is coming into this component as props.pokemon
export default function PokemonList( { pokemon, changeSummaryPokemon }) {

  return (

    <ListGroup>
      {pokemon.map(p => (
        // we can use the pokemon name as the key because all names are unique
        <ListGroup.Item key={p}>
          
          #{getPokemonNumber(p.url)} {capitalize(p.name)} 
          <Button className="mx-1 float-right" variant="outline-primary" size="sm" onClick={() => changeSummaryPokemon(p.url)}>
            More Details
          </Button>

        </ListGroup.Item>
      ))}
    </ListGroup>

  )
}
 