import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const NavBox = styled.div `
    display: flex;
    justify-content: center;
`

export default function Navigation(){
    return (

        <NavBox>
            <Link className="link" to="/">Home</Link>
            
            <Link className="link" to="/characters">Character Page</Link>
            
        </NavBox>
    )
}