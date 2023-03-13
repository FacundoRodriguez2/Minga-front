import React, { useEffect } from "react"
import Cards from "../../components/Author/Cards/cards"
import Main from "../../components/Author/Main/main"
import { useNavigate } from "react-router"

const Author = () => {
    const navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token || token === undefined) {
            navigate("/")
        }
    })

    return (
        <>
            <Main>
                <Cards />
            </Main>
        </>
    )
}

export default Author
