import authorReducer from "./authors/reducers"
import mangaReducer from "./mangas/reducers"
import chapterReducer from './chapters/reducers'
import textReducer from "./SearchBar/reducer"
import categoriesReducer from "./Categories/reducer"
import alertReducer from "./Alerts/reducer"
import sortReducer from './Sort/reducer'
import { configureStore } from "@reduxjs/toolkit"
import ModalComments from './ModalComments/reducer'
import getComments from './Comments/reducer'
import panelAdminReducer from './PanelAdmin/reducer'

const store = configureStore({
    reducer: {
        author: authorReducer,
        mangas: mangaReducer,
        chapters:chapterReducer,
        text: textReducer,
        categories: categoriesReducer,
        alert: alertReducer,
        order: sortReducer,
        commentsModal: ModalComments,
        comments: getComments,
        panelAdmin : panelAdminReducer,
    },
})

export default store
