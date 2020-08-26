import React from 'react'

export default function Pagination({ goToNextPage, goToPrevPage }) {
  return (
    <div>
      {/* this is just a tricky way to do a if statement with react */}
      {/* if goToPrevPage is false, then it quits out and never runs the button bit */}
      {goToPrevPage && <button onClick={goToPrevPage}>Previous</button>}
      {goToNextPage && <button onClick={goToNextPage}>Next</button>}
    </div>
  )
}
