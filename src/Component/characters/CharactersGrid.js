import React from 'react'
import Spinner from '../Spinner'
import CaractersItem from './CaractersItem'

const CharactersGrid = ({items, isLoading}) => {
  return isLoading ? (
<Spinner/>) : (<section className='cards'>
    {items.map((item) => (
        <CaractersItem key={item.char_id} item={item}></CaractersItem>
    ))}
  </section>)
}

export default CharactersGrid