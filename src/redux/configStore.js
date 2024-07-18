import { configureStore } from "@reduxjs/toolkit"
import pokemonSlice from "./slice/pokemonSlice"
import dienThoaiSlice from "./slice/dienThoaiSlice"

export const store = configureStore({
  reducer: {
    hoTen: () => {
      return "Quang Khải"
    },
    pokemonSlice,
    dienThoaiSlice,
  },
})
