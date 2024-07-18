// import React from "react"

import { useSelector } from "react-redux"
import ItemPokemon from "./ItemPokemon"
import { DatePicker } from "antd"

const BaiTap1Props = () => {
  const { pokemons } = useSelector((state) => state.pokemonSlice)
  console.log(pokemons)

  return (
    <div>
      <DatePicker />
      <h2>Bài tập hiển thị các pokemons</h2>
      <div className="grid grid-cols-5">
        {/* mảng để map và tạo layout */}
        {pokemons.map((item, index) => {
          //   const { image, name, attack, defense } = item
          return <ItemPokemon key={index} pokemon={item} />
        })}
      </div>
    </div>
  )
}

export default BaiTap1Props
