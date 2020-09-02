
import React from 'react'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { capitalize } from './Helpers'

export default function PokemonShow( { summaryPokemon, setSummaryPokemon } ) {

  let sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${summaryPokemon.id}.png` 

  return (

    <Container>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={sprite} />
        <Card.Body>
          <Card.Title>{ summaryPokemon === undefined ? "Name" : capitalize(summaryPokemon.name)}</Card.Title>
          <Card.Text>
            This is a Pokemon
          </Card.Text>
        </Card.Body>
      </Card>

      <Button className="mx-1 mt-3" variant="secondary" onClick={() => setSummaryPokemon(null)}>Previous</Button>

    </Container> 



  )
}
 