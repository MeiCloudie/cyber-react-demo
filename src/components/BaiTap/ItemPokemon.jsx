// import React from 'react'

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
          <button>Xem chi tiết</button>
        </>
      )}
    </div>
  )
}

export default ItemPokemon
