import React from 'react'

function Pagination({ gotoNextPage, gotoPreviousPage, previousPageUrl, nextPageUrl }) {
  console.log("PREVIO", previousPageUrl)
  console.log("siguiente", nextPageUrl)
  return (
    <div className='nav_buttons-wrapper'>
        <button onClick={gotoPreviousPage} className={previousPageUrl == null ? "page-nav disabled" : "page-nav"}>PREV</button>
        
        :<button onClick={gotoNextPage} className={nextPageUrl === null ? "page-nav disabled" : "page-nav"}>NEXT</button>
    </div>
  )
}
export default Pagination