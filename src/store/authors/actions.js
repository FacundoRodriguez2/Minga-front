import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import apiUrl from "../../url"
const handleToken = () => {
    const BEARER_TOKEN = localStorage.getItem("token")

    let config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${BEARER_TOKEN}`,
        },
    }
    return config
}

const get_author = createAsyncThunk("get_author", async ({_id}) => {
    try {
        const response = await axios.get(`${apiUrl}authors/${_id}`, handleToken())
        return {
            response: { author: response.data },
            message: "Author found",
        }
    } catch (error) {
        return {
            response: { author: error.response.data },
            message: "Author not found",
        }
    }
})


const authorActions = { get_author }

export default authorActions
