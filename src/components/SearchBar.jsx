import React from 'react'

function SearchBar ({search,setSearch}) {
  return (
    <div>
        <input 
        type="text" 
        className='search'
        placeholder='Search expense...'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>
    </div>
  )
}

export default SearchBar