import React from 'react'
import styled from 'styled-components'

const Nav = styled.div({
    width:'100%',
    display: 'flex',
    gap:'8px',
    marginBottom:'32px'
    

})
const P =styled.p({
    fontSize:'32px',
    fontWeight:'300'
})

export const NavBar = () => {

  return (
    <Nav>
      <h1>Github</h1> <P>Jobs</P>
    </Nav>
  )
}


