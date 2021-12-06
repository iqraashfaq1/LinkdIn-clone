import React from 'react'
import styled from "styled-components"

const Login = (props) => {
    return (
      <Container>
          <Nav>
              <a href= "/">
                  <img src ="/public/images/login-logo.svg" alt=""/>
              </a>
              <h2>hello</h2>
          </Nav>
      </Container>
    )
}
const Container = styled.div ``;
const Nav = styled.nav ``;

export default Login
