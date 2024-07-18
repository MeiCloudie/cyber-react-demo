// import React from 'react'

import { Link } from "react-router-dom"

const ItemPokemon = ({ pokemon }) => {
  //   console.log(props)
  return (
    <div>
      <img
        src={
          pokemon
            ? pokemon.image
            : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
        }
        alt=""
      />
      {pokemon && (
        <>
          <h3>{pokemon.name}</h3>
          <p>Tấn công: {pokemon.attack}</p>
          <p>Phòng thủ: {pokemon.defense}</p>
          {/* <button>Xem chi tiết</button> */}
          <Link to={`shoe-detail/${pokemon.name}`}>Xem chi tiết</Link>
        </>
      )}
    </div>
  )
}

export default ItemPokemon
