import React from 'react'
import Search from './components/search/Search'

const handleOnSearchChange = (searchData) => {
 console.log(searchData)
}

const App = () => {
  return (
    <div className='w-full max-w-[1080px] mx-auto my-4'>

    <div className="w-11/12 sm:w-4/6 lg:w-3/6 mx-auto">
      <Search   
        onSearchChange={handleOnSearchChange}/>

    </div>
    </div>
  )
}

export default App