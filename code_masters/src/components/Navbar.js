import React, { Component } from 'react'
import { MenuButton } from './Button'
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <NavContainer className="navbar-expanded">
                <h1>CodeMasters</h1>
                <MenuButton>
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </MenuButton>
            </NavContainer>
        )
    }
}

const NavContainer = styled.nav`
    background: blue;
    
    display: flex;
    justify-content: space-between;
`