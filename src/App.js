import React, {useEffect, useState} from 'react'
import './App.css'
import axios from 'axios'
import Header from './Component/Header'
import CharactersGrid from './Component/characters/CharactersGrid'
import Search from './Component/Search'

const App = () => {
  const [items, setitem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('')
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      console.log(result.data)

      setitem(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])
  return (
    <div className='container'>

      <Header/>
      <Search getQuery={(q) => setQuery(q)} />
      <CharactersGrid isLoading={isLoading} items={items}/>
    </div>
  )
}

export default App