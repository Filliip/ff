import React from 'react'
import "./SearchResultsList.css"

export default function SearchResultList({results}) {
  return (
    <div className='results-list'>
        {
            results.map((result, id) => {
                return <SearchResult result={result} key={id}/>;
            })
        }
        </div>
  )
}


