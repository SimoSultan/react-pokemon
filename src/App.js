import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import Pagination from './Pagination';
import axios from 'axios'


function App() {

  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

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
      setPokemon(res.data.results.map(p => p.name))
    })

    // useEffect allows us to return a function which gets called every time useEffect gets called again
    // allows us to cancel previous request every time a new request comes through
    return () => cancel()

  }, [currentPageUrl])

  function goToNextPage() {
    setCurrentPageUrl(nextPageUrl)
  }

  function goToPrevPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."

  return (
    // this is a fragment because JS can only return one object
    <>
      <PokemonList pokemon={pokemon}/>
      <Pagination 
        goToNextPage = {nextPageUrl ? goToNextPage : null}
        goToPrevPage = {prevPageUrl ? goToPrevPage : null}
      />
    </>
  );

}

export default App;
