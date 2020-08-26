import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (

    <div className="mt-3">
      {/* this is just a tricky way to do a if statement with react */}
      {/* if goToPrevPage is false, then it quits out and never runs the button bit */}
      {goToPrevPage && <Button className="mx-1" variant="secondary" onClick={goToPrevPage}>Previous</Button>}
      {goToNextPage && <Button className="mx-1" onClick={goToNextPage}>Next</Button>}
    </div>

  )
}
