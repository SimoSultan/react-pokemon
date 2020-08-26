import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
// a module used to make asynchronous requests to APIs
// works similarly to fetch
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // pokemon is the current state, setPokemon is to update the state
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  // this is a hook that takes a function
  // it runs every single time based on the props that we pass
  useEffect(() => {
    // every time we make a request, set loading state to be true
    setLoading(true)
    let cancel
    // axios can take a 2nd parameter as an object
    // every time axios makes a call, it will set the cancelToken into cancel
    axios.get(currentPageUrl, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then(res => {
      // when the request is fetched, then set loading state to false
      setLoading(false)
      // this data being passed in from the promise is in the object returned from the API
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      // when the result comes through from the promise, map over the array of objects to get the name
      // setPokemon(res.data.results.map(p => p.name))
      setPokemon(res.data.results)
    })

    // useEffect allows us to return a function which gets called every time useEffect gets called again
    // allows us to cancel previous request every time a new request comes through
    return () => cancel()

    // we pass an array of arguments
    // every time the elements in the array change, it will rerun the effect
    // if we leave it empty, it will only run one single time
    // but putting currentPageUrl in there, if the contents have changed in that url, then re-run the effect
  }, [currentPageUrl])

  //Pagination component uses these
  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }
  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }


  if (loading) return "Loading..."


  return (
    // this is a fragment because JS can only return one object
    <Container className="mt-5 mb-5">
      <h1 className="header text-center">Simo_Sultan's Pokemon React App</h1>
      {/* we need to pass the pokemonList component our pokemon */}
      <PokemonList pokemon={pokemon}/>
      <Container className="d-flex justify-content-center">
        <Pagination
          goToNextPage = {nextPageUrl ? goToNextPage : null}
          goToPrevPage = {prevPageUrl ? goToPrevPage : null}
        />
      </Container>

    </Container>
  );

}

export default App;
