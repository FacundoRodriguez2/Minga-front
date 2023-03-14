import authorReducer from "./authors/reducers"
import mangaReducer from "./mangas/reducers"
import textReducer from "./SearchBar/reducer"
import categoriesReducer from "./Categories/reducer"
import alertReducer from "./Alerts/reducer"
import sortReducer from './Sort/reducer'
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        author: authorReducer,
        mangas: mangaReducer,
        text: textReducer,
        categories: categoriesReducer,
        alert: alertReducer,
        order: sortReducer
    },
})

export default store
